import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);