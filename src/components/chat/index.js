import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ChatIcon from '@material-ui/icons/Chat';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Fuse from 'fuse.js';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SendIcon from '@material-ui/icons/Send';
import * as ROUTES from '../../constants/routes';
import * as COLORS from '../../constants/colors';
import {
  Container,
  Header,
  Title,
  ChatBody,
  Form,
  Input,
  Button,
  Main,
  FriendMain,
  UserMain,
  Message,
  MessageImage,
  MessageText,
  MessageUsername,
  UserBody,
  FriendInput,
  InviteButton,
  SubHeader,
  FriendSearch,
  Friend,
  FriendOverlay,
  FriendImage,
  FriendUsername,
  FriendStatus,
  ModalTitle,
  ModalText,
  ModalConfirm,
} from './styles/chat';

const HeaderToolTip = withStyles((theme) => ({
  tooltip: {
    margin: 0,
    fontSize: 12,
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  headerButton: {
    color: '#fff',
    fontSize: '1.725rem',
    transition: 'transform 0.1s ease',
    transform: 'scale(0.9)',
    '&:hover': {
      color: '#fff',
      transform: 'scale(1)',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    color: '#fff',
    backgroundColor: '#222',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '20px 45px',
    borderRadius: '7px',
    width: '40vw',
  },
}));

let scrollTimeout = null;
let placeholderResetTimeout = null;

const friendSearchOptions = {
  includeStore: true,
  keys: ['name'],
};

export default function Chat({
  messages,
  users,
  currentUser,
  friends,
  children,
  ...restProps
}) {
  const history = useHistory();

  const dummy = useRef();
  const friendSearchRef = useRef();
  const usersRef = useRef();

  const [state, setState] = useState({
    chatView: true,
    exitModal: false,
  });
  const [formValue, setFormValue] = useState('');

  const classes = useStyles();
  const [friendInputValue, setFriendInputValue] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState();
  const [friendInputPlaceholder, setFriendInputPlaceholder] =
    useState('Invite a friend');

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

  const toggleChatView = () => {
    setState({ ...state, chatView: !state.chatView });
  };

  const toggleExitModal = () => {
    setState({ ...state, exitModal: !state.exitModal });
  };

  const fuse = new Fuse(friends, friendSearchOptions);

  useEffect(() => {
    if (friendInputValue) {
      if (!selectedFriend) {
        setSearchList(fuse.search(friendInputValue));
      }
    } else setSearchList([]);
  }, [friendInputValue]);

  useEffect(() => {
    if (friendSearchRef.current) {
      const searchResultCount =
        friendSearchRef.current.children[0].children.length;
      if (searchResultCount === 0) {
        friendSearchRef.current.style.display = 'none';
        usersRef.current.style.height = '70.5vh';
      } else if (searchResultCount > 0) {
        friendSearchRef.current.style.display = 'flex';
        usersRef.current.style.height = '47.5vh';
      }
    }
  }, [searchList]);

  useEffect(() => {
    setSearchList();
  }, [selectedFriend]);

  const handleFriendInput = (event) => {
    setFriendInputValue(event.target.value);
    setSelectedFriend();
  };

  const handleFriendSelect = (event) => {
    const [id, name] = event.target.innerHTML.split(' / ');
    setFriendInputValue(name);
    setSelectedFriend({
      id: +id,
      name,
    });
  };

  const handleFriendInvite = (event) => {
    // Invite friend logic here ...

    // For now we flag user as invited, clear input and selection and show a message
    friends.find((friend) => friend.id === selectedFriend.id).status =
      'Invited';
    setSelectedFriend();
    setFriendInputValue('');
    setFriendInputPlaceholder('Invitation sent ✔️');
    placeholderResetTimeout = setTimeout(() => {
      clearTimeout(placeholderResetTimeout);
      setFriendInputPlaceholder('Invite a friend');
    }, 2000);
  };

  return (
    <Container {...restProps}>
      {children}
      <Header>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          style={{ padding: 6 }}
        >
          <Grid item>
            <HeaderToolTip
              title="Exit"
              placement="right"
              TransitionComponent={Zoom}
            >
              <IconButton
                onClick={toggleExitModal}
                className={classes.headerButton}
                aria-label="exit"
              >
                <PowerSettingsNewIcon fontSize="inherit" />
              </IconButton>
            </HeaderToolTip>
          </Grid>
          <Grid item>
            <Title>{state.chatView ? 'Room Chat' : 'Room Users'}</Title>
          </Grid>
          <Grid item>
            <HeaderToolTip
              title={state.chatView ? 'Users' : 'Chat'}
              placement="left"
              TransitionComponent={Zoom}
            >
              <IconButton
                onClick={toggleChatView}
                className={classes.headerButton}
                aria-label="users"
              >
                {state.chatView ? (
                  <PeopleAltIcon fontSize="inherit" />
                ) : (
                  <ChatIcon fontSize="inherit" />
                )}
              </IconButton>
            </HeaderToolTip>
          </Grid>
        </Grid>
      </Header>
      {state.chatView ? (
        <ChatBody>
          <Main>
            {messages &&
              messages.map((msg) => (
                <Message key={msg.id}>
                  <MessageImage
                    src={`https://picsum.photos/150?random=${msg.uid}`}
                  />
                  <MessageUsername>
                    {users.find((x) => x.id === msg.uid)?.name}
                  </MessageUsername>
                  <MessageText>{msg.text}</MessageText>
                </Message>
              ))}
            <span ref={dummy} />
          </Main>
          <Form onSubmit={sendMessage} style={{ height: '6%' }}>
            <Input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Send a message"
            />
            <Button
              type="submit"
              disabled={!formValue}
              style={{ backgroundColor: 'blue' }}
            >
              <SendIcon fontSize="inherit" />
            </Button>
          </Form>
        </ChatBody>
      ) : (
        <UserBody>
          <FriendMain>
            <Grid
              container
              direction="column"
              justify="space-between"
              style={{ padding: 0 }}
            >
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-between"
                  style={{ padding: 0 }}
                >
                  <Grid item xs={9}>
                    <FriendInput
                      type="text"
                      value={friendInputValue}
                      onChange={(e) => handleFriendInput(e)}
                      onFocus={() => {
                        if (searchList) {
                          const count = searchList.length;
                          if (count === 0) {
                            friendSearchRef.current.style.display = 'none';
                            usersRef.current.style.height = '70.5vh';
                          } else if (count > 0) {
                            friendSearchRef.current.style.display = 'flex';
                            usersRef.current.style.height = '47.5vh';
                          }
                        }
                      }}
                      placeholder={friendInputPlaceholder}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <InviteButton
                      onClick={(e) => {
                        handleFriendInvite(e);
                      }}
                      disabled={!selectedFriend}
                    >
                      <PersonAddIcon fontSize="inherit" />
                    </InviteButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item style={{ textAlign: '-webkit-center' }}>
                <FriendSearch ref={friendSearchRef}>
                  <Grid
                    container
                    direction="column"
                    justify="space-between"
                    style={{ padding: 0 }}
                  >
                    {searchList?.map((friend) => (
                      <Grid item key={friend.item.id}>
                        <Friend
                          onClick={(e) => handleFriendSelect(e)}
                          disabled={friend.item.status !== 'Not Invited'}
                        >
                          <FriendOverlay>{`${friend.item.id} / ${friend.item.name}`}</FriendOverlay>
                          <FriendImage
                            src={`https://picsum.photos/150?random=${friend.item.id}`}
                          />
                          <FriendUsername>{friend.item.name}</FriendUsername>
                          <FriendStatus>{friend.item.status}</FriendStatus>
                        </Friend>
                      </Grid>
                    ))}
                  </Grid>
                </FriendSearch>
              </Grid>
            </Grid>
          </FriendMain>
          <SubHeader>
            <Title>Users in chat ({users?.length || 0})</Title>
          </SubHeader>
          <UserMain ref={usersRef}>
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              justify="space-between"
              style={{ padding: 0 }}
            >
              <Grid item style={{ color: 'white' }}>
                Host :
              </Grid>
              <Grid item style={{ marginTop: 5, color: COLORS.TERTIARY_COLOR }}>
                {users?.find((user) => user.role === 'Broadcaster').name}
              </Grid>

              {users?.find((user) => user.role === 'User') ? (
                <>
                  <Grid item style={{ color: 'white', marginTop: 35 }}>
                    Invited :
                  </Grid>
                  {users.map((user) => {
                    if (user.role === 'User') {
                      return (
                        <Grid
                          item
                          style={{ marginTop: 5, color: COLORS.TERTIARY_COLOR }}
                        >
                          {user.name}
                        </Grid>
                      );
                    }
                    return null;
                  })}
                </>
              ) : null}
            </Grid>
          </UserMain>
        </UserBody>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={state.exitModal}
        onClose={toggleExitModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={state.exitModal}>
          <div className={classes.paper}>
            <ModalTitle id="transition-modal-title">Are you sure ?</ModalTitle>
            <ModalText id="transition-modal-description">
              If you are the room's broadcaster, leaving will put an end to the
              stream.
            </ModalText>
            <Grid
              container
              direction="row"
              justify="space-between"
              style={{ padding: '35px 20px' }}
            >
              <Grid item xs={12} style={{ textAlign: '-webkit-center' }}>
                <ModalConfirm
                  onClick={() => {
                    history.push(ROUTES.DASH);
                  }}
                  style={{ backgroundColor: 'blue' }}
                >
                  Confirm
                </ModalConfirm>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </Container>
  );
}
