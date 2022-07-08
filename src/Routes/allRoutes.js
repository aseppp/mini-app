import { lazy } from 'react';

export const AllRoutes = [
  {
    path: '/',
    name: 'home',
    component: lazy(() => import('../Pages/Home'))
  },
  {
    path: '/profile',
    name: 'profile',
    component: lazy(() => import('../Pages/Profile'))
  },
  {
    path: '/quotes',
    name: 'quotes',
    component: lazy(() => import('../Pages/RandomQuotes'))
  },
  {
    path: '/404',
    name: '404',
    component: lazy(() => import('../Pages/NoMatchPage'))
  }
];
