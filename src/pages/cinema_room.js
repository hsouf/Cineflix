import React from 'react';
import { Feature, OptForm, Header } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';
import Browse from './browse';
import { Player } from 'video-react';

import { MessagesPanel } from './chat-app/chat-panel';
export default function Cinema() {
  return (
    <>
      <div>
        <div className="chat-app" style={{ width: '100%' }}>
          <MessagesPanel />
          <Player
            playsInline
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
      </div>
    </>
  );
}
