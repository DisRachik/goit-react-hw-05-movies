import PropTypes from 'prop-types';
import { useState } from 'react';
import { GrSearchAdvanced } from 'react-icons/gr';

const SearchForMovie = ({ value, onSubmit }) => {
  const [valueInput, setValueInput] = useState(value);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="search"
        value={valueInput}
        onChange={e => setValueInput(e.target.value)}
      />
      <button type="submit">
        <GrSearchAdvanced size="32" />
      </button>
    </form>
  );
};

export default SearchForMovie;

SearchForMovie.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
