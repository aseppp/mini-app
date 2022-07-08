import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const Navbar = () => {
  const loc = useLocation();
  const [selected, setSelected] = useState();

  const menu = [
    {
      path: '/profile',
      icon: <i class="bx bx-user bx-md"></i>,
      title: 'Profile'
    },
    {
      path: '/quotes',
      icon: <i class="bx bxs-quote-alt-left bx-md"></i>,
      title: 'Quotes'
    }
  ];

  return (
    <>
      <nav>
        {loc.pathname === '/404' ? (
          <h1 className="uppercase text-2xl m-2 font-space-mono absolute md:m-6">
            404 not found
          </h1>
        ) : (
          <>
            <div className="absolute bottom-5 w-full">
              <BottomNavigation
                className="rounded"
                value={selected}
                onChange={(event, newValue) => {
                  setSelected(newValue);
                }}
              >
                {menu.map((item) => (
                  <BottomNavigationAction
                    LinkComponent={Link}
                    label={item.title}
                    icon={item.icon}
                    to={item.path}
                  />
                ))}
              </BottomNavigation>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
