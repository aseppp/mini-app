import { lazy } from 'react';

export const AllRoutes = [
  {
    path: '/',
    component: lazy(() =>
      import(/* webpackChunkName: "Pages" */ '../Pages/Home')
    )
  }
];
