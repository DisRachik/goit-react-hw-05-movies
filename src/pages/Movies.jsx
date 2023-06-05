import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Section, PageTitle } from 'styles';
import { fetchSearchMovies } from 'service/api';
import { SearchForMovie, MovieList, loader } from 'components';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }

    const controller = new AbortController();

    setIsLoading(true);
    setMovies([]);
    fetchSearchMovies(query, controller)
      .then(data => {
        setError(null);
        if (!data.length) throw new Error();
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
  }, [query]);

  const onSearchSubmit = e => {
    e.preventDefault();

    const query = e.target.children[0].value.toLowerCase().trim();
    setSearchParams(query ? { query } : {});
  };

  return (
    <Section>
      <Container>
        <PageTitle>Пошук фільму</PageTitle>
        <SearchForMovie value={query} onSubmit={onSearchSubmit} />
        {isLoading && <loader.TaskList />}
        {error && <p>{error}</p>}

        <MovieList movies={movies} />
      </Container>
    </Section>
  );
};

export default Movies;
