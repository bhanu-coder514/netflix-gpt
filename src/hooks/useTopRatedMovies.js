import { useDispatch, useSelector } from "react-redux";
import {addTopRatedMovies} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useTopRatedMovies = () => {

    // fetch data from TMBD api and put into store
    const dispatch = useDispatch();

    const TopRatedMovies = useSelector(store => store.movies.topRatedMovies);

    const getTopRatedMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?page=1',
            API_OPTIONS);

        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {

        !TopRatedMovies && getTopRatedMovies();

    }, []);
}

export default useTopRatedMovies;