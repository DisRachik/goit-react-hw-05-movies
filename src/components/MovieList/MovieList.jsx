import PropTypes from 'prop-types';
import { GiFilmProjector } from 'react-icons/gi';
import { FilmsList, FilmItem, FilmName, DateFilm } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <FilmsList>
      {movies.map(({ id, title, release_date }) => (
        <FilmItem key={id}>
          <GiFilmProjector size="32" />
          <FilmName>{title}</FilmName>
          <DateFilm>
            дата виходу: <span>{release_date}</span>
          </DateFilm>
        </FilmItem>
      ))}
    </FilmsList>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
