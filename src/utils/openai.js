import { API_KEY } from "./constants";

export const searchMoviesTMDB = async (movie) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movie)}`
  );

  const json = await data.json();
  return json.results.slice(0, 5);
};

export const getMoviesByCategory = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=en&sort_by=popularity.desc`
  );

  const json = await data.json();
  return json.results.slice(0, 5);
};
