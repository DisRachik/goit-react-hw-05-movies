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
    fetchSearchMovies(query, controller)
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
        {isLoading && <loader.TaskList />}
        {error && <p>{error}</p>}
        <SearchForMovie value={query} onSubmit={onSearchSubmit} />

        {movies.length ? (
          <MovieList movies={movies} />
        ) : (
          <p>
            За даною назвою нічого не знайдено, спробуйте змінити назву фільму
            для пошуку
          </p>
        )}
      </Container>
    </Section>
  );
};

export default Movies;
