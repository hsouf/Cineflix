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

    const requestOptions = {
      method: 'POST',

      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: emailAddress,
        password,
      }),
    };
    fetch('/login', requestOptions)
      .then((response) => {
        const token = response.headers.get('Authorization');
        localStorage.setItem('token', token);
        if (token) {
          history.push(ROUTES.DASH);
          localStorage.setItem('token', token);
        } else {
          alert('not known user');
        }
      })
      .then((data) => console.log(data));
  };

  return (
    <>
      <HeaderContainer homePage showButton={false}>
        <SignForm>
          <SignForm.Title>Sign In</SignForm.Title>
          {error && <SignForm.Error data-testid="error">{error}</SignForm.Error>}

          <SignForm.Base onSubmit={handleSignin} method="POST">
            <SignForm.Input
              type="email"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
              required
            />
            <SignForm.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
              required
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
