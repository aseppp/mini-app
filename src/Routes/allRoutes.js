import { lazy } from 'react';

export const AllRoutes = [
  {
    path: '/',
    name: 'home',
    component: lazy(() => import('../Pages/Home'))
  },
  {
    path: '/todo',
    name: 'Todo',
    component: lazy(() => import('../Pages/Todo'))
  },
  {
    path: '/quotes',
    name: 'quotes',
    component: lazy(() => import('../Pages/RandomQuotes'))
  },
  {
    path: '/quotes/:id',
    name: 'quotes',
    component: lazy(() => import('../Pages/RandomQuotesByAuthor'))
  },
  {
    path: '/movies',
    name: 'Movies',
    component: lazy(() => import('../Pages/Movies'))
  },
  {
    path: '/movies/:id',
    name: 'quotes',
    component: lazy(() => import('../Pages/MoviesDetail'))
  },
  {
    path: '/404',
    name: '404',
    component: lazy(() => import('../Pages/NoMatchPage'))
  }
];
