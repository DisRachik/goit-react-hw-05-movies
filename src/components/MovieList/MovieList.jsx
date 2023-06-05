import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { GiFilmProjector } from 'react-icons/gi';
import { MdOutlineReadMore } from 'react-icons/md';
import { FilmsList, FilmItem, FilmName, DateFilm } from './MovieList.styled';
import { ButtonLink } from 'styles';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <FilmsList>
      {movies.map(({ id, title, release_date }) => (
        <FilmItem key={id}>
          <GiFilmProjector size="32" />
          <FilmName>{title}</FilmName>
          <DateFilm>
            дата виходу: <span>{release_date}</span>
          </DateFilm>
          <ButtonLink to={`/movies/${id}`} state={{ from: location }}>
            Опис <MdOutlineReadMore size="24" />
          </ButtonLink>
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
