import styled from '@emotion/styled';

export const FilmsList = styled.ul`
  margin-top: ${props => props.theme.spacing(5)};
  width: 75%;
  max-width: ${props => props.theme.spacing(180)};
`;

export const FilmItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(3)};

  &:not(:first-of-type) {
    margin-top: ${props => props.theme.spacing(2.5)};
  }
`;

export const FilmName = styled.h2`
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const DateFilm = styled.p`
  margin-left: auto;

  font-size: ${props => props.theme.fontSizes.small};

  span {
    font-weight: 500;
  }
`;
