import React, { useState, useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Informer } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';

import * as COLORS from '../constants/colors';

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
    margin: '85px 0 20px',
    width: '57.5px',
    height: '57.5px',
    backgroundSize: '50px',
    color: COLORS.SECONDARY_COLOR,
    placeSelf: 'center',
  },
})(CheckCircleOutlineIcon);

const ColoredCircularProgress = withStyles({
  root: {
    color: COLORS.SECONDARY_COLOR,
    marginTop: '4.5vh',
    width: '50px !important',
    height: '50px !important',
  },
})(CircularProgress);

export default function ResendMail() {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem('resendState')) || {
      canResend: true,
      timerValue: '',
    }
  );

  const innerRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      innerRef.current.style.transform = 'translateX(0%)';
    }, 10);
  }, []);

  const handleMailResend = (event) => {
    event.preventDefault();
    // Mail resending logic here (if (state.canResend) ...)

    setState({ ...state, canResend: false });
  };

  const setTimerValue = (value) => {
    setState({ ...state, timerValue: value });
  };

  useEffect(() => {
    if (!state.canResend) {
      // Set a timer for the next possible resend (5 minutes delay)
      const targetTime = JSON.parse(localStorage.getItem('resendTarget')) || new Date().getTime() + 300000;
      localStorage.setItem('resendTarget', JSON.stringify(targetTime));

      const x = setInterval(function () {
        const now = new Date().getTime();

        const distance = targetTime - now;

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimerValue(seconds > 9 ? `${minutes}:${seconds}` : `${minutes}:0${seconds}`);

        if (distance < 0) {
          clearInterval(x);
          setTimerValue('0:00');
          setState({ ...state, canResend: true, timerValue: '' });
          localStorage.removeItem('resendState');
          localStorage.removeItem('resendTarget');
        } else localStorage.setItem('resendState', JSON.stringify(state));
      }, 990);
    }
  }, [state.canResend]);

  return (
    <>
      <HeaderContainer bg={false} homePage showButton={false} />
      <Informer>
        <div
          ref={innerRef}
          style={{ transform: 'translateX(80%)', display: 'inherit', transition: 'transform 0.7s ease' }}
        >
          <Informer.Inner>
            <Informer.Top>
              <CircleCheck />
              <Informer.TopWrapper>
                <Informer.PreTitle>
                  STEP <span style={{ fontWeight: 'bold' }}>1</span> OF <span style={{ fontWeight: 'bold' }}>3</span>
                </Informer.PreTitle>
                <Informer.Title>Confirm your email.</Informer.Title>
                <Informer.Body>
                  You should receive an email shortly. <br />
                  Please verify your account !
                </Informer.Body>
                {state.canResend ? (
                  <Informer.FootNote>
                    In case you did not receive an email, <br />
                    you can request another one.
                  </Informer.FootNote>
                ) : (
                  <>
                    <ColoredCircularProgress />
                    <span
                      style={{
                        display: 'grid',
                        marginTop: '20px',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        pointerEvents: 'none',
                      }}
                    >
                      {state.timerValue}
                    </span>
                  </>
                )}
              </Informer.TopWrapper>
              {state.canResend ? (
                <form onSubmit={(e) => handleMailResend(e)}>
                  <ConfirmButton type="submit">Resend verification</ConfirmButton>
                </form>
              ) : (
                <></>
              )}
            </Informer.Top>
          </Informer.Inner>
        </div>
      </Informer>
      <FooterContainer style={{ margin: 0, padding: '70px', maxWidth: 'auto' }} />
    </>
  );
}
