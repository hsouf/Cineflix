import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SignForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
  const history = useHistory();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (event) => {
    event.preventDefault();

    // Sign-in logic here ...

    // Go to the dashboard page for now
    history.push(ROUTES.DASH);
  };

  return (
    <>
      <HeaderContainer homePage showButton={false}>
        <SignForm>
          <SignForm.Title>Sign In</SignForm.Title>
          {error && <SignForm.Error data-testid="error">{error}</SignForm.Error>}

          <SignForm.Base onSubmit={handleSignin} method="POST">
            <SignForm.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <SignForm.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <SignForm.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
              Sign In
            </SignForm.Submit>
          </SignForm.Base>

          <SignForm.Text>
            New to Titflix? <SignForm.Link to="/signup">Sign up now.</SignForm.Link>
          </SignForm.Text>
          <SignForm.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </SignForm.TextSmall>
        </SignForm>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
