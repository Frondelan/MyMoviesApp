import {useEffect, useState} from 'react';
import apiDB from '../api/apiDB';
import {MovieAllData} from '../interfaces/moviesInterface';
import {Movies, RelatedMovies} from '../interfaces/relatedMovies';

interface Details {
  isLoading: boolean;
  movieDetails?: MovieAllData;
  relatedMovies: Movies[];
}

export default function useDetail(movieId: number) {
  const [detailState, setDetailState] = useState<Details>({
    isLoading: true,
    movieDetails: undefined,
    relatedMovies: [],
  });

  const getMovieDetails = async () => {
    const moviesDetails = apiDB.get<MovieAllData>(`/${movieId}`);
    const moviesRelated = apiDB.get<RelatedMovies>(`/${movieId}/similar`);

    const [movDetailsResponse, movRelatedResponse] = await Promise.all([
      moviesDetails,
      moviesRelated,
    ]);

    setDetailState({
      isLoading: false,
      movieDetails: movDetailsResponse.data,
      relatedMovies: movRelatedResponse.data.results,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...detailState,
  };
}
