import axios from 'axios';

const API_KEY = '19345c148191d7f91b4cf12b6e616f39';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const params = {
  api_key: API_KEY,
  language: 'uk-UA',
};

export const fetchTrendingMovies = async ({ signal }) => {
  const response = await axios('trending/movie/day', { params, signal });
  return response.data.results.map(({ id, title, release_date }) => ({
    id,
    title,
    release_date,
  }));
};
