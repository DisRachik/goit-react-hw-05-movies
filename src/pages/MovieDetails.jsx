import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { MovieCard, loader } from 'components';
import { fetchAboutMovie } from 'service/api';
import { ButtonLink, ButtonLinkWrap, Container, Section } from 'styles';

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
        setError('Щось пішло не так!!! Спробуй ще раз...');
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
          <button type="button">назад</button>
          {isLoading && <loader.CardLoader />}
          {error && <p>{error}</p>}
          <MovieCard {...infoFilm} />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Додаткова інформація</h2>
          <ButtonLinkWrap>
            <ButtonLink to="cast">Aктори</ButtonLink>
            <ButtonLink to="reviews">Bідгуки</ButtonLink>
          </ButtonLinkWrap>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};

export default MovieDetails;