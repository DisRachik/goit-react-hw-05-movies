import PropTypes from 'prop-types';
import { useState } from 'react';
import { GrSearchAdvanced } from 'react-icons/gr';
import { SearchForm, SearchInput, SearchBtn } from './SearchForMovie.styled';

const SearchForMovie = ({ value, onSubmit }) => {
  const [valueInput, setValueInput] = useState(value);

  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput
        type="search"
        value={valueInput}
        onChange={e => setValueInput(e.target.value)}
      />
      <SearchBtn type="submit">
        <GrSearchAdvanced size="32" />
      </SearchBtn>
    </SearchForm>
  );
};

export default SearchForMovie;

SearchForMovie.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
