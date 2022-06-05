import {API_KEY, API_HOST, LANG} from '../utils/constants';

export function getPopularMoviesApi(page = 1) {
  const url = `${API_HOST}/movie/popular?api_key=${API_KEY}&language=${LANG}$page=${page}`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    });
}

export function getRelatedMoviesApi(idMovie) {
  const url = `${API_HOST}/movie/${idMovie}/similar?api_key=${API_KEY}&language=${LANG}$page=1`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    });
}

export function getMovieByIdApi(idMovie) {
  const url = `${API_HOST}/movie/${idMovie}?api_key=${API_KEY}&language=${LANG}`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    });
}

export function searchMoviesApi(search) {
  const url = `${API_HOST}/search/movie?api_key=${API_KEY}&language=${LANG}&query=${search}`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    });
}
