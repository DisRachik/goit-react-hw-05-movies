import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForMovie from 'components/SearchForMovie/SearchForMovie';
import { Container, Section, PageTitle } from 'styles';
import { fetchSearchMovies } from 'service/api';
import MovieList from 'components/MovieList/MovieList';

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

    fetchSearchMovies(query, controller)
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
        {isLoading && <p> Ждемссссссс.....</p>}
        {error && <p>Жопа</p>}
        <MovieList movies={movies} />
      </Container>
    </Section>
  );
};

export default Movies;
