import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'service/api';

// import MovieList from '../components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchTrendingMovies(controller)
      .then(data => {
        setIsLoading(true);
        setMovies(data);
        setError(null);
      })
      .catch(err => {
        setError('Something went wrong, try again!');
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {isLoading && <p> Ждемссссссс.....</p>}
      {error && <p>Жопа</p>}
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
