import axios from 'axios';

const apiDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    langugage: 'en-US',
  },
});

export default apiDB;
