import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import DateTimePicker from 'react-datetime-picker';
export default function SignUp() {
  const history = useHistory();
  //const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [date, setDate] = useState('');
  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignup = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Movie Schedule</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="Room name"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Choose a movie"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
              list="movies"
            />
            <datalist id="movies">
              <option value="Edge" />
              <option value="Firefox" />
            </datalist>

            <Form.Input
              placeholder="Max members"
              type="number"
              //onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              value={password}
              autoComplete="off"
              placeholder="Visibility"
              onChange={({ target }) => setPassword(target.value)}
              list="visibility"
            />
            <datalist id="visibility">
              <option value="Public" />
              <option value="Private" />
            </datalist>
            <Form.Text>Pick the date and hour that suits you</Form.Text>
            <DateTimePicker onChange={setDate} value={date} />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-up"
            >
              Create room !
            </Form.Submit>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
