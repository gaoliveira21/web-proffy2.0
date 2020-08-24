import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthRoutes: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
    </>
  );
};

export default AuthRoutes;
