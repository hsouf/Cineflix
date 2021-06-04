import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SignForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function SignUp({ ...props }) {
  const history = useHistory();

  const [userName, setUserName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (props.location.state?.mail) {
      setEmailAddress(props.location.state.mail);
      props.location.state.mail = '';
    }
  }, []);

  const isInvalid = userName === '' || password === '' || emailAddress === '';

  const handleSignup = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',

      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: userName,
        email: emailAddress,
        password: password,
      }),
    };
    fetch('/api/registration', requestOptions)
      .then((response) => {
        response.text();
        if (response.status === 200) history.push(ROUTES.RESEND_MAIL);
        else alert(`Failed to communicate with server (${response.status})`);
      })
      .then((data) => console.log(data));
  };

  return (
    <>
      <HeaderContainer homePage showButton={false}>
        <SignForm>
          <SignForm.Title>Sign Up</SignForm.Title>
          {error && <SignForm.Error>{error}</SignForm.Error>}

          <SignForm.Base onSubmit={handleSignup} method="POST">
            <SignForm.Input
              placeholder="Username"
              value={userName}
              onChange={({ target }) => setUserName(target.value)}
              required
            />
            <SignForm.Input
              placeholder="Email address"
              type="email"
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
            />
            <SignForm.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-up"
            >
              Sign Up
            </SignForm.Submit>
          </SignForm.Base>

          <SignForm.Text>
            Already a user?{' '}
            <SignForm.Link to={ROUTES.SIGN_IN}>Sign in now.</SignForm.Link>
          </SignForm.Text>
          <SignForm.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </SignForm.TextSmall>
        </SignForm>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
