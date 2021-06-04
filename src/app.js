import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {
  Home,
  SignUp,
  SignIn,
  ResendMail,
  ConfirmMail,
  Plans,
  Payment,
  Dash,
  NewRoom,
  Room,
  MyRooms,
  CreditOption,
} from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export function App() {
  const [user, setUser] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <Switch>
        <IsUserRedirect loggedInPath={ROUTES.DASH} exact path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
        <IsUserRedirect
          component={SignUp}
          render={(props) => <SignUp {...props} />}
          loggedInPath={ROUTES.DASH}
          exact
          path={ROUTES.SIGN_UP}
        >
          <SignUp />
        </IsUserRedirect>
        <IsUserRedirect
          loggedInPath={ROUTES.DASH}
          exact
          path={ROUTES.RESEND_MAIL}
        >
          <ResendMail />
        </IsUserRedirect>
        <IsUserRedirect
          loggedInPath={ROUTES.DASH}
          exact
          path={ROUTES.RESEND_MAIL}
        >
          <ResendMail />
        </IsUserRedirect>
        <IsUserRedirect
          loggedInPath={ROUTES.DASH}
          exact
          path={ROUTES.CONFIRM_MAIL}
          render={(props) => <ConfirmMail {...props} />}
          component={ConfirmMail}
        >
          <ConfirmMail />
        </IsUserRedirect>
        <IsUserRedirect
          component={Plans}
          render={(props) => <Plans {...props} />}
          loggedInPath={ROUTES.DASH}
          exact
          path={ROUTES.PLANS}
        >
          <Plans />
        </IsUserRedirect>
        <IsUserRedirect
          component={Payment}
          render={(props) => <Payment {...props} />}
          loggedInPath={ROUTES.DASH}
          exact
          path={ROUTES.PAYMENT}
        >
          <Payment />
        </IsUserRedirect>
        <IsUserRedirect
          component={CreditOption}
          render={(props) => <CreditOption {...props} />}
          loggedInPath={ROUTES.DASH}
          exact
          path={ROUTES.CREDIT_OPTION}
        >
          <CreditOption />
        </IsUserRedirect>
        <IsUserRedirect loggedInPath={ROUTES.DASH} exact path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <ProtectedRoute
          user={user}
          loggedInPath={ROUTES.SIGN_IN}
          path={ROUTES.DASH}
        >
          <Dash />
        </ProtectedRoute>
        <IsUserRedirect loggedInPath={ROUTES.BROWSE} path={ROUTES.MY_ROOMS}>
          <MyRooms />
        </IsUserRedirect>
        <IsUserRedirect loggedInPath={ROUTES.BROWSE} path={ROUTES.NEW_ROOM}>
          <NewRoom />
        </IsUserRedirect>
        <IsUserRedirect
          component={Room}
          render={(props) => <Room {...props} />}
          loggedInPath={ROUTES.DASH}
          path={ROUTES.ROOM}
        >
          <Room />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
