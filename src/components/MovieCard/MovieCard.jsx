import PropTypes from 'prop-types';
import NotImage from '../../images/no-img.jpg';
import { PageTitle } from 'styles';
import { FilmWrap, ImageWrap, FilmInfo } from './MovieCard.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({
  poster_path,
  title,
  vote_average,
  overview,
  genre,
  release_date,
}) => {
  return (
    <FilmWrap>
      <ImageWrap>
        <img
          src={poster_path ? `${BASE_IMG_URL}${poster_path}` : NotImage}
          alt="Постер фільму"
        />
      </ImageWrap>
      <FilmInfo>
        <PageTitle>
          {title}
          {release_date ? ` - (${release_date.slice(0, 4)})` : ''}
        </PageTitle>
        <p>
          Глядацький рейтинг:{' '}
          {vote_average
            ? `${Math.round(vote_average * 10)}%`
            : 'Відсутня інформація'}
        </p>
        <h2>Сюжет:</h2>
        <p>{overview ? overview : 'Не дивились)'}</p>
        <h2>Жанр:</h2>
        <p>{genre ? `${genre}` : 'Не визначились'}</p>
      </FilmInfo>
    </FilmWrap>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genre: PropTypes.string,
  release_date: PropTypes.string,
};
