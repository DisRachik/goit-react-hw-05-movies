import PropTypes from 'prop-types';
import { GiFilmProjector } from 'react-icons/gi';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, release_date }) => (
        <li key={id}>
          <GiFilmProjector size="32" />
          <span>{title}</span>
          <span>Date of release: {release_date}</span>
        </li>
      ))}
    </ul>
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
