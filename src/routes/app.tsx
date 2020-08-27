import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Route exact path="/home" component={Home} />
    </>
  );
};

export default AppRoutes;
