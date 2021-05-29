/* eslint-disable no-nested-ternary */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.png';

export function HeaderContainer({
  bg,
  children,
  homePage = false,
  showButton = true,
}) {
  const history = useHistory();
  const goToRooms = () => {
    history.push(ROUTES.MY_ROOMS);
  };
  return (
    <Header bg={bg}>
      <Header.Frame>
        <Header.Logo to={ROUTES.DASH} src={logo} alt="Titflix" />

        {homePage === false ? (
          <>
            <Header.Profile>
              <Header.TextLink onClick={() => goToRooms()}>
                My rooms
              </Header.TextLink>
            </Header.Profile>
            <Header.Profile>
              <Header.TextLink>My friends</Header.TextLink>
              <Header.Dropdown>
                <Header.Group>
                  <img
                    src="/images/users/man.png"
                    style={{ padding: '10px' }}
                  />
                  <Header.TextLink>soulaimane</Header.TextLink>
                  <Header.TextLink />
                </Header.Group>
                <Header.Group>
                  <img
                    src="/images/users/man.png"
                    style={{ padding: '10px' }}
                  />
                  <Header.TextLink>soufiane</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
            <Header.TextLink>Coming soon</Header.TextLink>
            <Header.Search />
            <Header.Profile>
              <img src="/images/users/man.png" />
              <Header.TextLink>My Profile</Header.TextLink>
              <Header.Dropdown style={{ width: '20px' }}>
                <Header.Group>
                  <Header.TextLink>Subscription </Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink>Parameters</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink>rooms</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
            )<Header.ButtonLink to={ROUTES.HOME}>Logout</Header.ButtonLink>
          </>
        ) : showButton === true ? (
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        ) : (
          <></>
        )}
      </Header.Frame>
      {children}
    </Header>
  );
}
