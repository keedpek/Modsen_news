import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage/index.jsx';
import routes from './routes';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => <Route key={path} path={path} Component={Component}/>)}
      <Route path='*' Component={NotFoundPage}/>
    </Routes>
  );
};

export default AppRouter;
