import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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

export const ButtonLink = styled(Link)`
  padding: 0 ${props => props.theme.spacing(2)};

  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};

  background-color: ${props => props.theme.colors.blue};
  border: ${props => props.theme.spacing(0.25)} solid
    ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.spacing(2)};

  transition: ${props =>
    props.theme.animation('background-color, box-shadow, color')};

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.medium};
    background-color: ${props => props.theme.colors.gray};

    svg {
      color: ${props => props.theme.colors.red};
    }
  }
`;
