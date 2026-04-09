import { useDispatch } from "react-redux";
import {addpopularMovies} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const usePoplarMovies = () => {

    // fetch data from TMBD api and put into store
    const dispatch = useDispatch();

    const getPlayingMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?page=1',
            API_OPTIONS);

        const json = await data.json();
        dispatch(addpopularMovies(json.results));
    }

    useEffect(() => {
        getPlayingMovies();
    }, []);
}

export default usePoplarMovies;