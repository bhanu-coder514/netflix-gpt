import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";


const useMovieTrailer = (movieId) => {

     const dispatch = useDispatch();

     // fetch video trailer and update the store with trailer video data 
  const getMovieVideos = async () => {
    const video = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);

    const json = await video.json();

    // find out trailer
    const filterData = json.results.filter(video => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // setTrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    getMovieVideos();
  }, [])
}

export default useMovieTrailer;