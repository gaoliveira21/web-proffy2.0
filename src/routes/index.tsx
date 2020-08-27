import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import AuthRoutes from './auth';
import AppRoutes from './app';

const Routes: React.FC = () => {
  const signed = true;

  return (
    <BrowserRouter>
      <Switch>{signed ? <AppRoutes /> : <AuthRoutes />}</Switch>
    </BrowserRouter>
  );
};

export default Routes;
