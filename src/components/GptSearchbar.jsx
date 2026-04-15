import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants'
import { getMoviesByCategory, searchMoviesTMDB } from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMoviesResults } from '../utils/gptSlice'

const GptSearchbar = () => {

    const langKey = useSelector(store => store.config.lang);
    const currentlang = lang[langKey] || lang["en"];
    const searchtext = useRef();
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS)

        const json = await data.json();

        return json.results;
    }

    const handleGptsearchClick = async () => {
        const query = searchtext.current.value.toLowerCase();

        let results;

        if (query.includes("hollywood")) {
            //category based
            results = await getMoviesByCategory();
        } else {
            // direct search
            results = await searchMoviesTMDB(query);
        }

        if(!results){
            // show the error message
        }

        const gptmovies = results.map((movie) => movie.title); 
        console.log(gptmovies);

        // console.log(results);
        // console.log(results[0]?.original_title);

        // for each movie i will search TMDB
        const promiseArray = gptmovies.map((movie) => searchMovieTMDB(movie));
        // [promise,promise,promise,promise,promise]

        // this promise.all takes the array of promises 
        // when all the promises are resolved then only i get the data in tmdb results
        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(addGptMoviesResults({movieNames: gptmovies, movieResults: tmdbResults}));

    };

    return (
        <div className='pt-[10%] flex justify-center'>
            <form
                className='bg-black w-1/2 grid grid-cols-12 bg-opacity-80 rounded-lg'
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchtext}
                    className='p-4 m-4 col-span-9'
                    type='text'
                    placeholder={currentlang.gptSerachPlaceholder}
                />
                <button
                    className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'
                    onClick={handleGptsearchClick}
                >
                    {currentlang.search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchbar
