import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import AuthRoutes from './auth';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoutes />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
