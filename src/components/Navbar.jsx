import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getToken } from '../Utils';

const Navbar = () => {
  const loc = useLocation();
  const token = getToken();

  const menu = [
    {
      path: '/profile',
      icon: <i className="bx bx-user bx-md"></i>,
      title: 'Profile',
      dot: '.'
    },
    {
      path: '/quotes',
      icon: <i className="bx bxs-quote-alt-left bx-md"></i>,
      title: 'Quotes',
      dot: '.'
    },
    {
      path: '/movies',
      icon: <i className="bx bx-camera-movie bx-md"></i>,
      title: 'Movie',
      dot: '.'
    }
  ];

  const activeStyles = {
    transition: 'linear 0.3s',
    color: 'black'
  };

  const inActiveStyle = {
    color: 'grey'
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <>
      <nav>
        {loc.pathname === '/404' ? (
          <h1 className="uppercase text-2xl m-2 font-space-mono absolute md:m-6">
            404 not found
          </h1>
        ) : (
          <>
            <div className="fixed w-full bottom-3">
              <div className="flex bg-white justify-center max-w-fit m-auto rounded-full p-3">
                {menu.map((item, key) => (
                  <div key={key}>
                    <NavLink
                      to={item.path}
                      style={({ isActive }) =>
                        isActive ? activeStyles : inActiveStyle
                      }
                    >
                      <div className="flex flex-col items-center ">
                        <span className="px-2">{item.icon}</span>
                      </div>
                    </NavLink>
                  </div>
                ))}
                {token ? (
                  <button onClick={logout}>
                    <i className="bx bxs-door-open bx-md text-gray-600"></i>
                  </button>
                ) : null}
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
