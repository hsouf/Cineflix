import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export function App() {
  return (
    <Router>
      <Switch>
        <IsUserRedirect loggedInPath={ROUTES.BROWSE} path={ROUTES.NEW_ROOM}>
          <SignUp />
        </IsUserRedirect>
        <IsUserRedirect loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
