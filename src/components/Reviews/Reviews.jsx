import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loader } from 'components';
import { fetchReviews } from 'service/api';
import { ReviewsList, ReviewItem } from './Reviews.styled';

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
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </ReviewItem>
          ))}
        </ReviewsList>
      ) : (
        <p>Вибачте, ще ніхто не написав відгуків...</p>
      )}
    </>
  );
};

export default Reviews;
