import { useEffect, useState } from 'react';
import { loader, MovieList } from 'components';
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
        setError('Щось пішло не так!!! Спробуй ще раз...');
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
        {isLoading && <loader.TaskList />}
        {error && <p>{error}</p>}
        <MovieList movies={movies} />
      </Container>
    </Section>
  );
};

export default Home;
