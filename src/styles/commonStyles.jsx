import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing(5)};
`;

export const Section = styled.section`
  padding: ${props => props.theme.spacing(5)} 0;
`;

export const PageTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.large};
  text-align: center;
  color: ${props => props.theme.colors.dark};
`;
