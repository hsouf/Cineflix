/* eslint-disable no-nested-ternary */
import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.png';
import { useHistory } from 'react-router-dom';
export function HeaderContainer({
  children,
  homePage = false,
  showButton = true,
}) {
  const history = useHistory();
  const joinRoom = () => {
    history.push(ROUTES.ROOM);
  };
  const goToRooms = () => {
    history.push(ROUTES.MY_ROOMS);
  };
  return (
    <Header>
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
                  <Header.Picture src="man" />
                  <Header.TextLink>soulaimane</Header.TextLink>
                  <Header.TextLink />
                </Header.Group>
                <Header.Group>
                  <Header.Picture src="man" />
                  <Header.TextLink>soufiane</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
            <Header.TextLink>Coming soon</Header.TextLink>
            <Header.Search />
            <Header.Profile>
              <img src={`/images/users/man.png`} />
              <Header.TextLink>My account</Header.TextLink>
              <Header.Dropdown style={{ width: '300px', padding: '5%' }}>
                <Header.Group>
                  <Header.TextLink>My subscription </Header.TextLink>

                  <Header.TextLink>Parameters</Header.TextLink>
                  <Header.TextLink style={{ padding: '10%' }}>
                    rooms
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
            )<Header.ButtonLink to={ROUTES.HOME}> Logout </Header.ButtonLink>
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
