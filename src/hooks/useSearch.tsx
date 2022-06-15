import {useEffect, useState} from 'react';
import apiDBS from '../api/apiDBS';
import {Movies} from '../interfaces/relatedMovies';

interface Search {
  searchMovies?: Movies[];
}

export default function useSearch(query: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [noData, setnoData] = useState(false);
  const [searchState, setSearchState] = useState<Search>({
    searchMovies: [],
  });

  const getSearchMovies = async () => {
    apiDBS(query).then(response => {
      if (response.results.length === 0) {
        setnoData(true);
      }
      setSearchState({searchMovies: response.results});
      setIsLoading(false);
    });
  };
  useEffect(() => {
    getSearchMovies();
  }, []);

  return {
    isLoading,
    noData,
    ...searchState,
  };
}
