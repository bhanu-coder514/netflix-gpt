import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePoplarMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';


const Browse = () => {

  useNowPlayingMovies();
  usePoplarMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
