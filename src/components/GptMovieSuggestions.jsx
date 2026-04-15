import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {

  const gpt = useSelector(store => store.GptSearch);
  const { movieResults, movieNames } = gpt;

  if (!movieNames) return null;

  console.log(movieNames)


  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
        {movieNames.map((movienames,index) =>
          <MovieList
            key={movienames}
            title={movienames}
            movies={movieResults[index]}
          />
          )}

      </div>
    </div>
  )
}

export default GptMovieSuggestions;
