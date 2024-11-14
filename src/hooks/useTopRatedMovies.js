import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { topRatedMovies } from '../utils/moviesSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
      const url = 'https://api.themoviedb.org/3/movie/top_rated?page=1';
      const data = await fetch(url, API_OPTIONS);
      const json = await data.json();
      dispatch(topRatedMovies(json.results));
    
    }
    
    useEffect(()=>{
        getTopRatedMovies();
    }, [dispatch]);
}

export default useTopRatedMovies