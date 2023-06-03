import { Outlet } from 'react-router-dom';
import { Navigation, NavigationSite, NavLink } from './SharedLayout.styled';
import { Container } from 'styles';

const SharedLayout = () => {
  return (
    <>
      <header>
        <Container>
          <Navigation>
            <NavigationSite>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies">Gallery</NavLink>
              </li>
            </NavigationSite>
          </Navigation>
        </Container>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
