import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import Select from 'react-select';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Header } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '50%',
    backgroundColor: theme.palette.background.paper,

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SignUp() {
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [date, setDate] = useState();
  const [friend, setFriend] = useState('deeee');
  const isInvalid = firstName === '' || password === '' || emailAddress === '';
  const [open, setOpen] = React.useState(false);
  const handleSignup = (event) => {
    event.preventDefault();
    // alert(friend[1].value);
    // history.push(ROUTES.HOME);
    setOpen(true);
  };
  const goToDash = () => {
    history.push(ROUTES.MY_ROOMS);
  };
  const handleClose = () => {
    // alert(friend[1].value);
    // history.push(ROUTES.HOME);
    setOpen(false);
    // history.push(ROUTES.ROOM);
  };

  const options = [
    // get all friends
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Schedule Your Movie</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} /* method="POST" */>
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
              // onChange={({ target }) => setEmailAddress(target.value)}
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
            <Form.Text>Invite your friends</Form.Text>
            <Select
              value={friend}
              onChange={setFriend}
              options={options}
              isMulti
            />
            <Form.Submit
              // disabled={isInvalid}
              type="submit"
              data-testid="sign-up"
              // onClick={handleSignup()}
            >
              Create room !
            </Form.Submit>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          BackdropProps={date}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">
              Room created with success ! We have invited your friends to join
              you
            </h2>
            <p
              id="simple-modal-description"
              style={{ fontSize: '18', color: 'blue' }}
            >
              The movie will start at{' '}
              {new Date(date).toLocaleString('en-US', {
                hour: 'numeric',
                hour12: true,
              })}{' '}
              on {new Date(date).getDay()}/{new Date(date).getMonth()}/
              {new Date(date).getFullYear()}
            </p>
            <p>
              <span>Be there, don't miss it 😉</span>
            </p>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => goToDash()}
            >
              {' '}
              OK{' '}
            </Button>
          </div>
        </Modal>
      </div>
    </>
  );
}
