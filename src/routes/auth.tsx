import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';

const AuthRoutes: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/reset-password" component={ResetPassword} />
    </>
  );
};

export default AuthRoutes;
