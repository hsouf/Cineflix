import React from 'react';

import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { useHistory } from 'react-router-dom';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import Button from '@material-ui/core/Button';
export default function MyRooms() {
  const history = useHistory();

  const joinRoom = () => {
    history.push(ROUTES.ROOM);
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
        <Header.Group>
          <img
            src={`/images/films/drama/the-social-network/small.jpg`}
            style={{ width: '30%' }}
          />
          <Header.TextLink style={{ padding: '10%' }}>
            Hosted by : soufiane
          </Header.TextLink>

          <Header.TextLink>Guests 6 </Header.TextLink>
          <Header.TextLink style={{ padding: '10%' }}>
            Scheduled for : Thu March 20 at 7pm
          </Header.TextLink>
          <Header.ButtonLink
            onClick={() => joinRoom()}
            style={{ marginRight: '15%' }}
          >
            Join Now
          </Header.ButtonLink>
        </Header.Group>
        <Header.Group>
          <img
            src={`/images/films/drama/the-social-network/small.jpg`}
            style={{ width: '30%' }}
          />
          <Header.TextLink style={{ padding: '10%' }}>
            Hosted by : soufiane
          </Header.TextLink>

          <Header.TextLink>Guests 6 </Header.TextLink>
          <Header.TextLink style={{ padding: '10%' }}>
            Scheduled for : Thu March 20 at 7pm
          </Header.TextLink>
          <Header.ButtonLink
            onClick={() => joinRoom()}
            style={{ marginRight: '15%' }}
          >
            Join Now
          </Header.ButtonLink>
        </Header.Group>
      </div>
      <FooterContainer />
    </>
  );
}
