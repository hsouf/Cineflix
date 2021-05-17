import React from 'react';

import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';

import * as ROUTES from '../constants/routes';

export default function ConfirmMail() {
  const history = useHistory();

  const goToSingninPage = () => {
    history.push(ROUTES.SIGN_IN);
  };
  return (
    <>
      <HeaderContainer homePage showButton={false} />
      <h1 style={{ textAlign: 'center', color: 'white' }}>WELCOME TO TITFLIX, TRY TO SIGN IN NOW !</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: 'blue', color: 'white', width: '20%' }}
          onClick={() => goToSingninPage()}
        >
          SIGN IN NOW !
        </Button>
      </div>
      <FooterContainer />
    </>
  );
}
