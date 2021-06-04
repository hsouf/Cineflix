import React, { useState } from 'react';
import { Player, Chat } from '../components';

export default function Room({ ...props }) {
  const [chatState, setChatState] = useState({
    visible: true,
  });

  return (
    <>
      <Player
        onFullscreen={() => {
          setChatState({ visible: !chatState.visible });
        }}
        src={'/api/video/stream/mp4/FUEL'}
      />
      <Chat
        users={props.location.state?.users}
        currentUser={props.location.state?.currentUser}
        friends={props.location.state?.friends}
        messages={props.location.state?.messages}
        style={
          chatState.visible
            ? { visibility: 'visible' }
            : { visibility: 'hidden' }
        }
      />
    </>
  );
}
