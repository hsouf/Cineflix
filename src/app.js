import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, SignUp, SignIn, Subscribe, Dash, NewRoom, Room } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import ConfirmMail from './pages/confirm-mail';
import MyRooms from './pages/my_rooms';

export function App() {
  return (
    <Router>
      <Switch>
        <IsUserRedirect loggedInPath={ROUTES.DASH} exact path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
        <IsUserRedirect loggedInPath={ROUTES.DASH} exact path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        <IsUserRedirect
          loggedInPath={ROUTES.DASH}
          exact
          path={ROUTES.CONFIRM_MAIL}
        >
          <ConfirmMail />
        </IsUserRedirect>
        <IsUserRedirect
          loggedInPath={ROUTES.DASH}
          exact
          path={ROUTES.SUBSCRIBE}
        >
          <Subscribe />
        </IsUserRedirect>
        <IsUserRedirect loggedInPath={ROUTES.DASH} exact path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect loggedInPath={ROUTES.BROWSE} path={ROUTES.DASH}>
          <Dash />
        </IsUserRedirect>
        <IsUserRedirect loggedInPath={ROUTES.BROWSE} path={ROUTES.MY_ROOMS}>
          <MyRooms />
        </IsUserRedirect>
        <IsUserRedirect loggedInPath={ROUTES.BROWSE} path={ROUTES.NEW_ROOM}>
          <NewRoom />
        </IsUserRedirect>
        <IsUserRedirect loggedInPath={ROUTES.DASH} path={ROUTES.ROOM}>
          <Room />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
