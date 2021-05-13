import React from 'react';
import { Feature, OptForm, Header } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';
import Browse from './browse';
export default function Home() {
  const history = useHistory();
  function goToNewRoom() {
    history.push(ROUTES.NEW_ROOM);
  }
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            WATCH YOUR FAVORITE MOVIES WITH YOUR FRIENDS{' '}
          </Feature.Title>
          <Feature.SubTitle>Create your own room now !</Feature.SubTitle>
          <OptForm>
            <OptForm.Button onClick={() => goToNewRoom()}>
              Create New Room Now !
            </OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Invite your friends to join you</OptForm.Text>
          </OptForm>
          <div style={{ marginTop: '10%', marginBottom: '5%' }}>
            <Browse />
          </div>

          <Header src="joker1" dontShowOnSmallViewPort>
            <Header.Feature>
              <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
              <Header.Text>
                Forever alone in a crowd, failed comedian Arthur Fleck seeks
                connection as he walks the streets of Gotham City. Arthur wears
                two masks -- the one he paints for his day job as a clown, and
                the guise he projects in a futile attempt to feel like he's part
                of the world around him.
              </Header.Text>
              <Header.PlayButton>Open new room</Header.PlayButton>
            </Header.Feature>
          </Header>
        </Feature>
      </HeaderContainer>
    </>
  );
}
