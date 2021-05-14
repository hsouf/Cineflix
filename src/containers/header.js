import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

import logo from '../logo.png';
export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />

        <Header.Profile>
          <Header.TextLink>My rooms</Header.TextLink>
          <Header.Dropdown style={{ width: '500px', padding: '5%' }}>
            <Header.Group>
              <Header.Picture src={'cinema'} style={{ padding: '7%' }} />
              <Header.TextLink style={{ padding: '10%' }}>
                Hosted by{' '}
              </Header.TextLink>
              <Header.TextLink>Movie</Header.TextLink>

              <Header.TextLink>Number of guests</Header.TextLink>
              <Header.TextLink style={{ padding: '10%' }}>Day</Header.TextLink>
            </Header.Group>
          </Header.Dropdown>
        </Header.Profile>

        <Header.TextLink>My watchlist</Header.TextLink>
        <Header.Profile>
          <Header.TextLink>My friends</Header.TextLink>
          <Header.Dropdown>
            <Header.Group>
              <Header.Picture src={'man'} />
              <Header.TextLink>soulaimane</Header.TextLink>
              <Header.TextLink></Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Picture src={'man'} />
              <Header.TextLink>soufiane</Header.TextLink>
            </Header.Group>
          </Header.Dropdown>
        </Header.Profile>

        <Header.TextLink>Coming soon</Header.TextLink>
        <Header.Search />
        <Header.ButtonLink to={ROUTES.HOME}> Logout </Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
