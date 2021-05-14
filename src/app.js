import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import { MessagesPanel } from './pages/chat-app/chat-panel';
import Cinema from './pages/cinema_room';
import '/Users/mpfa/dev/netflix/node_modules/video-react/dist/video-react.css';
export function App() {
  return (
    <Router>
      <Switch>
        <IsUserRedirect loggedInPath={ROUTES.HOME} path={ROUTES.CINEMA}>
          <Cinema />
        </IsUserRedirect>
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
