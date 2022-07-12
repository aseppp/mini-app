import React, { Suspense } from 'react';
import { indexRoutes } from './Routes';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  const loc = useLocation();
  return (
    <Suspense>
      {loc.pathname === '/movies/:id' ? null : <Navbar />}
      <Routes>
        {indexRoutes.map((item, key) => (
          <Route key={key} path={item.path} element={<item.component />} />
        ))}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
