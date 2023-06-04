import styled from '@emotion/styled';

export const SearchForm = styled.form`
  margin-top: ${props => props.theme.spacing(5)};

  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing(0.25)};
`;

export const SearchInput = styled.input`
  border-radius: ${props => props.theme.spacing(2)};
  width: ${props => props.theme.spacing(70)};
`;

export const SearchBtn = styled.button`
  padding: ${props => props.theme.spacing(0.5)};
  background-color: ${props => props.theme.colors.blue};
  border-radius: ${props => props.theme.spacing(2)};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.red};
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;
