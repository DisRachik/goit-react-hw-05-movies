import styled from '@emotion/styled';
import { NavLink as RouteNavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  padding: ${props => props.theme.spacing(5)};
  border-bottom: ${props => props.theme.spacing(0.5)} solid
    ${props => props.theme.colors.gray};
`;

export const NavigationSite = styled.ul`
  display: flex;
  gap: ${props => props.theme.spacing(5)};
`;

export const NavLink = styled(RouteNavLink)`
  display: block;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};

  background: ${props => props.theme.colors.buttonBackground};
  border: ${props => props.theme.spacing(0.25)} solid
    ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.regular};

  transition: ${props =>
    props.theme.animation('background, box-shadow, color')};

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.small};
  }

  &.active {
    color: ${props => props.theme.colors.light};
    background: ${props => props.theme.colors.red};
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;
