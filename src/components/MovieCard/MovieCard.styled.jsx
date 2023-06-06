import styled from '@emotion/styled';

export const FilmWrap = styled.div`
  margin-top: ${props => props.theme.spacing(5)};
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing(5)};
`;

export const ImageWrap = styled.div`
  flex-basis: 35%;
  max-width: 500px;
  box-shadow: ${props => props.theme.shadows.regular};
`;

export const FilmInfo = styled.div`
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(4)};
`;
