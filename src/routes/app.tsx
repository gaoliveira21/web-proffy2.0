import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import GiveClasses from '../pages/GiveClasses';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Route exact path="/home" component={Home} />
      <Route exact path="/give-classes" component={GiveClasses} />
    </>
  );
};

export default AppRoutes;
