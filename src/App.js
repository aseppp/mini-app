import React, { Suspense } from 'react';
import { AllRoutes } from './Routes/allRoutes';
import { Route, Routes } from 'react-router-dom';
import NoMatchPage from './Pages/NoMatchPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Suspense>
      <Navbar />
      <Routes>
        {AllRoutes.map((item, key) => (
          <Route key={key} element={<item.component />} path={item.path} />
        ))}

        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
