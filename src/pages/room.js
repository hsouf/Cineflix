import React, { useRef, useState } from 'react';
import { Player, Chat } from '../components';

const currentUser = {
  id: 1,
  name: 'Hamza',
};

const users = [
  {
    id: 1,
    name: 'Hamza',
  },
  {
    id: 2,
    name: 'Soufiane',
  },
];

const messages = [
  {
    id: 1,
    uid: 1,
    text: 'hello',
  },
  {
    id: 2,
    uid: 2,
    text: 'hi',
  },
];

let scrollTimeout = null;

export default function Room() {
  const dummy = useRef();
  const [state, setState] = useState({
    visible: true,
  });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    messages.push({
      id: messages.length + 1,
      uid: currentUser.id,
      userName: currentUser.name,
      text: formValue,
    });

    setFormValue('');
    scrollTimeout = setTimeout(() => {
      clearTimeout(scrollTimeout);
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  };

  return (
    <>
      <Player>
        <Player.Video
          onFullscreen={() => {
            setState({ visible: !state.visible });
          }}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </Player>
      <Chat style={state.visible ? { visibility: 'visible' } : { visibility: 'hidden' }}>
        <Chat.Header>
          <Chat.Title>Room Chat</Chat.Title>
        </Chat.Header>
        <Chat.Body>
          <Chat.Main>
            {messages &&
              messages.map((msg) => (
                <Chat.Message key={msg.id}>
                  <Chat.Image src="/images/users/profile.jpg" />
                  <Chat.Username>{users.find((x) => x.id === msg.uid)?.name}</Chat.Username>
                  <Chat.Text>{msg.text}</Chat.Text>
                </Chat.Message>
              ))}
            <span ref={dummy} />
          </Chat.Main>
          <Chat.Form submit={sendMessage}>
            <Chat.Input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeHolder="Send a message" />
            <Chat.Button type="submit" disabled={!formValue}>
              ✉️
            </Chat.Button>
          </Chat.Form>
        </Chat.Body>
      </Chat>
    </>
  );
}
