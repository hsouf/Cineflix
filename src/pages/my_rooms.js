import React from 'react';

import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import * as COLORS from '../constants/colors';

// Import to test movie room. Room data should be sent from the backend.
import * as ROOM_TEST from '../fixtures/room-test';

const testData = {
  users: ROOM_TEST.users, // Room users
  messages: ROOM_TEST.messages, // Room chat messages
  currentUser: ROOM_TEST.currentUser, // Current logged in user
  friends: ROOM_TEST.friends, // Current user friends
  src: ROOM_TEST.src, // Video source
};

export default function MyRooms() {
  const history = useHistory();

  const joinRoom = (event) => {
    event.preventDefault();

    history.push({
      pathname: ROUTES.ROOM,
      state: testData,
    });
  };
  return (
    <>
      <HeaderContainer showButton={false} />

      <div
        style={{
          display: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '15%',
          marginLeft: '15%',
        }}
      >
        <h2 style={{ color: 'white' }}>Upcoming movies</h2>
        <form onSubmit={(e) => joinRoom(e)}>
          <Header.Group>
            <img src="/images/films/drama/the-social-network/small.jpg" style={{ width: '30%' }} />
            <Header.TextLink style={{ padding: '10%' }}>Hosted by : soufiane</Header.TextLink>
            <Header.TextLink>Guests 6 </Header.TextLink>
            <Header.TextLink style={{ padding: '10%' }}>Scheduled for : Thu March 20 at 7pm</Header.TextLink>
            <Button
              type="submit"
              style={{
                marginRight: '15%',
                background: COLORS.MAIN_COLOR,
                color: 'white',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                lineHeight: 1.2,
                padding: '15px 35px',
              }}
            >
              Join Now
            </Button>
          </Header.Group>
          <Header.Group>
            <img src="/images/films/drama/the-social-network/small.jpg" style={{ width: '30%' }} />
            <Header.TextLink style={{ padding: '10%' }}>Hosted by : soufiane</Header.TextLink>
            <Header.TextLink>Guests 6 </Header.TextLink>
            <Header.TextLink style={{ padding: '10%' }}>Scheduled for : Thu March 20 at 7pm</Header.TextLink>
            <Button
              type="submit"
              style={{
                marginRight: '15%',
                background: COLORS.MAIN_COLOR,
                color: 'white',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                lineHeight: 1.2,
                padding: '15px 35px',
              }}
            >
              Join Now
            </Button>
          </Header.Group>
        </form>
      </div>
      <FooterContainer />
    </>
  );
}
