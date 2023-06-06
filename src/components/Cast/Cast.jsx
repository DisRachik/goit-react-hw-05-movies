import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotImage from '../../images/no-img.jpg';
import { loader } from 'components';
import { fetchCast } from 'service/api';
import { ActorGallery, ActorCard, ActorName, ActorRole } from './Cast.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    fetchCast(movieId, controller)
      .then(data => {
        setError(null);
        setActors(data);
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
      {isLoading && <loader.NetflixLoader />}
      {error && <p>{error}</p>}
      {actors.length ? (
        <ActorGallery>
          {actors.map(({ id, name, character, profile_path }) => (
            <ActorCard key={id}>
              <img
                src={profile_path ? `${BASE_IMG_URL}${profile_path}` : NotImage}
                alt={name}
              />
              <ActorName>{name}</ActorName>
              <ActorRole>{character}</ActorRole>
            </ActorCard>
          ))}
        </ActorGallery>
      ) : (
        <p>Вибачте, у нас немає інформації стосовно цього фільму.</p>
      )}
    </>
  );
};

export default Cast;
