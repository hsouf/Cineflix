import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import { withStyles } from '@material-ui/core/styles';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Informer } from '../components';

import * as COLORS from '../constants/colors';
import * as ROUTES from '../constants/routes';

const ColoredLock = withStyles({
  root: {
    margin: '20px 0 35px',
    width: '52px',
    height: '52px',
    backgroundSize: '50px',
    color: COLORS.SECONDARY_COLOR,
    placeSelf: 'center',
  },
})(LockIcon);

const SmallLock = withStyles({
  root: {
    width: '16px',
    height: '16px',
    color: COLORS.TERTIARY_COLOR,
  },
})(LockIcon);

export default function Payment({ ...props }) {
  const history = useHistory();

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

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push({
      pathname: ROUTES.CREDIT_OPTION,
      state: { ...props.location.state },
    });
  };

  return (
    <>
      <HeaderContainer bg={false} homePage showButton={false} />
      <Informer style={{ overflowX: 'hidden' }}>
        <div
          ref={innerRef}
          style={{ transform: 'translateX(80%)', display: 'inherit', transition: 'transform 0.7s ease' }}
        >
          <Informer.Inner>
            <Informer.Top>
              <ColoredLock />
              <Informer.TopWrapper>
                <Informer.PreTitle>
                  STEP <span style={{ fontWeight: 'bold' }}>3</span> OF <span style={{ fontWeight: 'bold' }}>3</span>
                </Informer.PreTitle>
                <Informer.Title>Set up your payment.</Informer.Title>
                <div style={{ fontSize: '16px', padding: '12px 120px' }}>
                  <p>Your membership starts as soon as you set up payment.</p>
                </div>
                <div>
                  <h4 style={{ marginTop: 0 }}>
                    No commitments.
                    <br />
                    Cancel online anytime.
                  </h4>
                </div>
                <Informer.PaymentBadge>
                  <SmallLock />
                  <div style={{ fontSize: '13px', height: '14px', marginRight: '3px' }}>Secure Server</div>
                </Informer.PaymentBadge>
                <Informer.PaymentWrapper>
                  <Informer.PaymentButton onClick={(e) => handleSubmit(e)}>
                    <Informer.PaymentImage alt="logo-VISA" src="/images/icons/visa-v3.svg" />
                    <Informer.PaymentImage alt="logo-MASTERCARD" src="/images/icons/mastercard-v2.svg" />
                  </Informer.PaymentButton>
                </Informer.PaymentWrapper>
              </Informer.TopWrapper>
            </Informer.Top>
          </Informer.Inner>
        </div>
      </Informer>
      <FooterContainer />
    </>
  );
}
