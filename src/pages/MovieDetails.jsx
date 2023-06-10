import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { TiArrowBackOutline, TiArrowDownOutline } from 'react-icons/ti';
import { MovieCard, loader } from 'components';
import { fetchAboutMovie } from 'service/api';
import { ButtonLink, ButtonLinkWrap, Container, Section } from 'styles';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [infoFilm, setInfoFilm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

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
          <ButtonLink to={goBack.current}>
            <TiArrowBackOutline /> назад
          </ButtonLink>
          {isLoading && <loader.CardLoader />}
          {error ? <p>{error}</p> : <MovieCard {...infoFilm} />}
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Додаткова інформація</h2>
          <ButtonLinkWrap>
            <ButtonLink to="cast">
              <TiArrowDownOutline /> Aктори
            </ButtonLink>
            <ButtonLink to="reviews">
              Bідгуки <TiArrowDownOutline />
            </ButtonLink>
          </ButtonLinkWrap>

          <Suspense fallback={<loader.ThreeDots />}>
            <Outlet />
          </Suspense>
        </Container>
      </Section>
    </>
  );
};

export default MovieDetails;
