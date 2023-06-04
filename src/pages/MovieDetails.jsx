import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAboutMovie } from 'service/api';

import { Container, Section } from 'styles';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [infoFilm, setInfoFilm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    fetchAboutMovie(movieId, controller)
      .then(data => {
        setError(null);
        setInfoFilm(data);
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
  }, [movieId]);

  return (
    <>
      <Section>
        <Container>
          {isLoading && <p> Ждемссссссс.....</p>}
          {error && <p>Жопа</p>}

          <button type="button">назад</button>
          <MovieCard {...infoFilm} />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>додаткова інформація</h2>
          <button type="button">акторський склад</button>
          <button type="button">відгуки</button>
        </Container>
      </Section>
    </>
  );
};

export default MovieDetails;
