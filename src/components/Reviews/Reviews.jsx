import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loader } from 'components';
import { fetchReviews } from 'service/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    fetchReviews(movieId, controller)
      .then(data => {
        setError(null);
        console.log(data);
        setReviews(data);
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
      {isLoading && <loader.ThreeDots />}
      {error && <p>{error}</p>}
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Вибачте, ще ніхто не написав відгуків...</p>
      )}
    </>
  );
};

export default Reviews;
