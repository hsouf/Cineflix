import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckIcon from '@material-ui/icons/Check';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Informer } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import queryString from 'query-string';
import * as COLORS from '../constants/colors';
import * as ROUTES from '../constants/routes';
import { useLocation } from 'react-router';

const ConfirmButton = withStyles({
  root: {
    color: 'white',
    background: COLORS.MAIN_COLOR,
    width: '81%',
    minHeight: '48px',
    fontWeight: '500',
    fontSize: '17px',
    borderRadius: '2px',
    textTransform: 'none',
    '&:hover': {
      background: COLORS.SECONDARY_COLOR,
    },
  },
})(Button);

const CircleCheck = withStyles({
  root: {
    margin: '20px 0 20px',
    width: '57.5px',
    height: '57.5px',
    backgroundSize: '50px',
    color: COLORS.SECONDARY_COLOR,
    placeSelf: 'center',
  },
})(CheckCircleOutlineIcon);

const ColoredCheck = withStyles({
  root: {
    color: COLORS.SECONDARY_COLOR,
    width: '30px',
    height: '30px',
    margin: '0 10px 0 -11px',
  },
})(CheckIcon);

const ColoredCircularProgress = withStyles({
  root: {
    color: COLORS.SECONDARY_COLOR,
    marginTop: '20vh',
    width: '90px !important',
    height: '90px !important',
  },
})(CircularProgress);

export default function ConfirmMail({ ...props }) {
  const history = useHistory();
  //let city = new URLSearchParams(props.location.search).get('token');

  const [state, setState] = useState({
    verified: false,
  });
  const [token, setToken] = useState('');

  const topContainerRef = useRef();
  const bottomContainerRef = useRef();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    //alert(props.match.params.token);
    //let params = queryString.parse(props.match.params.token);
    let token_temp = props.match.params.token.substring(6);

    const requestOptions = {
      method: 'GET',

      headers: { 'Content-Type': 'application/json' },
    };
    fetch('/api/confirm?token=' + token_temp, requestOptions)
      .then((response) => {
        //const token = response.headers.get('Authorization');
        //localStorage.setItem('token', token);
        console.log(token_temp);
        if (response.status == 200) {
          setState({ ...state, verified: true });
        }
      })
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    if (state.verified) {
      if (topContainerRef.current) {
        topContainerRef.current.style.opacity = 1;
        topContainerRef.current.style.position = 'relative';
      }
      if (bottomContainerRef.current) {
        bottomContainerRef.current.style.opacity = 1;
        bottomContainerRef.current.style.position = 'relative';
      }
    }
  }, [state.verified]);

  // Should call route to verify mail then set state to true. For now we simulate this with a timer.
  //setTimeout(() => {
  //setState({ ...state, verified: true });
  //}, 3000);

  return (
    <>
      <HeaderContainer bg={false} homePage showButton={false} />
      <Informer>
        <Informer.Inner>
          <Informer.Top>
            <div
              ref={topContainerRef}
              style={{
                position: 'absolute',
                display: 'inherit',
                transition: 'all 0.6s linear',
                opacity: 0,
                willChange: 'opacity',
                margin: 'auto',
              }}
            >
              <h1 style={{ margin: '1em 0 1em 0' }}>
                Email address is verified !
              </h1>
              <CircleCheck />
              <Informer.TopWrapper>
                <Informer.PreTitle>
                  STEP <span style={{ fontWeight: 'bold' }}>2</span> OF{' '}
                  <span style={{ fontWeight: 'bold' }}>3</span>
                </Informer.PreTitle>
                <Informer.Title>Choose your plan.</Informer.Title>
                <Informer.Body>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li
                      style={{
                        fontSize: '17.5px',
                        fontWeight: 'normal',
                        padding: '0 0 11px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <ColoredCheck />
                      No commitments, cancel anytime.
                    </li>
                    <li
                      style={{
                        fontSize: '17.5px',
                        fontWeight: 'normal',
                        padding: '11px 0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <ColoredCheck />
                      <span>Everything on Titflix for one low price.</span>
                    </li>
                    <li
                      style={{
                        fontSize: '17.5px',
                        fontWeight: 'normal',
                        padding: '11px 0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <ColoredCheck />
                      <span>Watch and chat with your friends.</span>
                    </li>
                  </ul>
                </Informer.Body>
                <Informer.FootNote />
                <div
                  ref={bottomContainerRef}
                  style={{
                    position: 'absolute',
                    display: 'inherit',
                    opacity: 0,
                  }}
                >
                  <ConfirmButton
                    onClick={() => {
                      history.push(ROUTES.PLANS);
                    }}
                  >
                    See the plans
                  </ConfirmButton>
                </div>
              </Informer.TopWrapper>
            </div>
            {!state.verified ? (
              <Informer.TopWrapper
                style={{ display: 'grid', placeItems: 'center' }}
              >
                <ColoredCircularProgress />
                <h1 style={{ margin: '2rem 0 2rem 0' }}>
                  Verifying your account . . .
                </h1>
              </Informer.TopWrapper>
            ) : (
              <></>
            )}
          </Informer.Top>
        </Informer.Inner>
      </Informer>
      <FooterContainer
        style={{ margin: 0, padding: '70px', maxWidth: 'auto' }}
      />
    </>
  );
}
