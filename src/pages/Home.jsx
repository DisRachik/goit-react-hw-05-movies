import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';

import { fetchTrendingMovies } from 'service/api';
import { Container, Section, PageTitle } from 'styles';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    fetchTrendingMovies(controller)
      .then(data => {
        setError(null);
        setMovies(data);
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
    <Section>
      <Container>
        <PageTitle>Сьогодні в тренді</PageTitle>
        {isLoading && <p> Ждемссссссс.....</p>}
        {error && <p>Жопа</p>}
        <MovieList movies={movies} />
      </Container>
    </Section>
  );
};

export default Home;
