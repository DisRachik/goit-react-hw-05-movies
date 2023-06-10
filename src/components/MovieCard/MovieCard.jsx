import PropTypes from 'prop-types';
import { PageTitle } from 'styles';
import { FilmWrap, ImageWrap, FilmInfo } from './MovieCard.styled';

const MovieCard = ({
  poster_path,
  title,
  vote_average,
  overview,
  genres,
  release_date,
}) => {
  return (
    <FilmWrap>
      <ImageWrap>
        <img src={poster_path} alt="Постер фільму" />
      </ImageWrap>
      <FilmInfo>
        <PageTitle>
          {title}
          {release_date}
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
        <p>{genres ? `${genres}` : 'Не визначились'}</p>
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
