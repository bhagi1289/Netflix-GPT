import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { upcomingMovies } from "../utils/moviesSlice";


const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
      const url = 'https://api.themoviedb.org/3/movie/upcoming?page=1';
      const data = await fetch(url, API_OPTIONS);
      const json = await data.json();
      dispatch(upcomingMovies(json.results));
    
    }
    
    useEffect(()=>{
        getUpcomingMovies();
    }, [dispatch]);
}

export default useUpcomingMovies