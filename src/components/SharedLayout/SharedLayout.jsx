import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Gallery</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
