import axios from 'axios';
import NotImage from '../images/no-img.jpg';

const API_KEY = '19345c148191d7f91b4cf12b6e616f39';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const BASE_PARAMS = {
  api_key: API_KEY,
  language: 'uk-UA',
};
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchTrendingMovies = async ({ signal }) => {
  const params = { ...BASE_PARAMS };
  const response = await axios('trending/movie/day', { params, signal });
  return response.data.results.map(({ id, title, release_date }) => ({
    id,
    title,
    release_date,
  }));
};

export const fetchSearchMovies = async (query, { signal }) => {
  const params = { ...BASE_PARAMS, query };
  const response = await axios('search/movie', { params, signal });
  return response.data.results.map(({ id, title, release_date }) => ({
    id,
    title,
    release_date,
  }));
};

const createUrl = url => (url ? `${BASE_IMG_URL}${url}` : NotImage);

export const fetchAboutMovie = async (movie_id, { signal }) => {
  const params = { ...BASE_PARAMS };
  const response = await axios(`movie/${movie_id}`, { params, signal });
  const { title, vote_average, overview, genres, poster_path, release_date } =
    response.data;
  return {
    poster_path: createUrl(poster_path),
    title,
    vote_average,
    overview,
    genres: genres.map(item => item.name).join(', '),
    release_date: release_date
      ? ` - (${new Date(release_date).getFullYear()})`
      : '',
  };
};

export const fetchCast = async (movie_id, { signal }) => {
  const params = { ...BASE_PARAMS };
  const response = await axios(`movie/${movie_id}/credits`, { params, signal });
  return response.data.cast.map(({ id, name, character, profile_path }) => ({
    id,
    name,
    character,
    profile_path: createUrl(profile_path),
  }));
};

export const fetchReviews = async (movie_id, { signal }) => {
  const response = await axios(`movie/${movie_id}/reviews?api_key=${API_KEY}`, {
    signal,
  });
  return response.data.results.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));
};
