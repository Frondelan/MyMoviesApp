import {useState, useEffect} from 'react';
import apiDB from '../api/apiDB';
import {Movie, MovieDB} from '../interfaces/moviesInterface';

interface MoviesState {
  popular: Movie[];
}

export default function usePopular() {
  const [isLoading, setIsLoading] = useState(true);
  const [movieState, setmovieState] = useState<MoviesState>({popular: []});

  const getMovies = async () => {
    const popular = await apiDB.get<MovieDB>('/popular');
    setmovieState({popular: popular.data.results});
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    isLoading,
    ...movieState,
  };
}
