import axios from 'axios';

const apiDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'c228dad6f5c1cf9f486b1000122ea7d4',
    langugage: 'en-US',
  },
});

export default apiDB;
