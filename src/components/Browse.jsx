import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePoplarMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTsearch from './GPTsearch';
import { useSelector } from 'react-redux';


const Browse = () => {

  useNowPlayingMovies();
  usePoplarMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const gptView = useSelector((store) => store.GptSearch);


  return (
    <div>
      <Header />
      {gptView.showGptSearch ? (<GPTsearch /> ):( <>
        <MainContainer />
        <SecondaryContainer />
      </>
    )}

    </div>
  )
}

export default Browse;
