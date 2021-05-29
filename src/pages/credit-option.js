import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { HeaderContainer } from '../containers/header';
import { Informer, OptForm } from '../components';
import { FooterContainer } from '../containers/footer';

import * as COLORS from '../constants/colors';
import * as ROUTES from '../constants/routes';

const ConfirmButton = withStyles({
  root: {
    color: 'white',
    background: COLORS.MAIN_COLOR,
    width: '100%',
    fontWeight: '500',
    fontSize: '17px',
    borderRadius: '2px',
    textTransform: 'none',
    marginTop: '35px',
    padding: '.75rem 25.33333333px',
    minWidth: '110px',
    minHeight: '48px',
    lineHeight: '19px',
    '&:hover': {
      background: COLORS.SECONDARY_COLOR,
    },
  },
})(Button);

export default function CreditOption({ ...props }) {
  const history = useHistory();

  const innerRef = useRef();

  const [state, setState] = useState({
    fullName: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      innerRef.current.style.transform = 'translateX(0%)';
    }, 10);
  }, []);

  const handleInput = (event) => {
    let { name, value } = event.target;

    if (name && value !== undefined) {
      if (name === 'cardNumber' && value.charAt(value.length - 1) === ' ') return;

      if (
        name === 'expirationDate' &&
        state.expirationDate &&
        state.expirationDate.length === 2 &&
        value.length === 3 &&
        value.charAt(2) !== '/'
      )
        value = `${value.slice(0, 2)}/${value.slice(2)}`;

      setState({
        [name]: value,
      });
    }
  };

  const handlePlanChange = (event) => {
    event.preventDefault();

    history.push({
      pathname: ROUTES.PLANS,
      state: { plan: props.location.state.plan },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Should pair with Stripe API and make the money transaction. For now we push the dashboard page.
    history.push(ROUTES.DASH);
  };

  return (
    <>
      <HeaderContainer bg={false} homePage showButton={false} />
      <Informer>
        <div
          ref={innerRef}
          style={{ transform: 'translateX(80%)', display: 'inherit', transition: 'transform 0.7s ease' }}
        >
          <Informer.Inner>
            <div
              style={{
                placeContent: 'start',
                margin: '0 auto',
                width: '100%',
                height: '100%',
                display: 'grid',
                maxWidth: '450px',
                textAlign: 'left',
              }}
            >
              <Informer.PreTitle>
                STEP <span style={{ fontWeight: 'bold' }}>3</span> OF <span style={{ fontWeight: 'bold' }}>3</span>
              </Informer.PreTitle>
              <Informer.Title>Set up your credit or debit card.</Informer.Title>
              <div style={{ margin: 0, width: '100%', display: 'grid' }}>
                <span>
                  <Informer.PaymentImage alt="logo-VISA" src="/images/icons/visa-v3.svg" />
                  <Informer.PaymentImage alt="logo-MASTERCARD" src="/images/icons/mastercard-v2.svg" />
                </span>
                <OptForm
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                  style={{ flexDirection: 'row' }}
                >
                  <OptForm.Input
                    type="text"
                    value={state.fullName}
                    onChange={(e) => {
                      handleInput(e);
                    }}
                    name="fullName"
                    style={{
                      maxWidth: 'none',
                      borderRadius: '3px',
                      marginBottom: '5px',
                      border: '2px solid #606060',
                      height: '65px',
                    }}
                    placeholder="Full Name"
                    required
                  />
                  <OptForm.Input
                    type="text"
                    value={state.cardNumber}
                    onChange={(e) => {
                      handleInput(e);
                    }}
                    name="cardNumber"
                    style={{
                      maxWidth: 'none',
                      borderRadius: '3px',
                      marginBottom: '5px',
                      border: '2px solid #606060',
                      height: '65px',
                    }}
                    minLength="12"
                    maxLength="19"
                    placeholder="Card Number"
                    required
                  />
                  <OptForm.Input
                    value={state.expirationDate}
                    onChange={(e) => {
                      handleInput(e);
                    }}
                    name="expirationDate"
                    style={{
                      maxWidth: 'none',
                      borderRadius: '3px',
                      marginBottom: '5px',
                      border: '2px solid #606060',
                      height: '65px',
                    }}
                    minLength="5"
                    maxLength="5"
                    placeholder="Expiration Date (MM/YY)"
                    required
                  />
                  <OptForm.Input
                    type="text"
                    value={state.securityCode}
                    onChange={(e) => {
                      handleInput(e);
                    }}
                    name="securityCode"
                    style={{
                      maxWidth: 'none',
                      borderRadius: '3px',
                      marginBottom: '5px',
                      border: '2px solid #606060',
                      height: '65px',
                    }}
                    minLength="3"
                    maxLength="4"
                    placeholder="Security Code (CVV)"
                    required
                  />
                  <Informer.OrderContainer>
                    <Informer.OrderText>
                      <Informer.OrderPrice>{`${props.location.state.price} / Month`}</Informer.OrderPrice>
                      <Informer.OrderPlan>{`${props.location.state.plan} Plan`}</Informer.OrderPlan>
                    </Informer.OrderText>
                    <Informer.OrderButton
                      onClick={(e) => {
                        handlePlanChange(e);
                      }}
                    >
                      Change
                    </Informer.OrderButton>
                  </Informer.OrderContainer>
                  <Informer.Footer style={{ padding: '24px 0 6px' }}>
                    By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are
                    over 18. Titflix will automatically continue your membership and charge the monthly membership fee
                    (currently {props.location.state.price}) to your payment method until you cancel. You may cancel at
                    any time to avoid future charges.
                  </Informer.Footer>
                  <Informer.Agreement id="agreement">
                    <span>I agree.</span>
                  </Informer.Agreement>
                  <ConfirmButton type="submit">Start Membership</ConfirmButton>
                </OptForm>
              </div>
            </div>
          </Informer.Inner>
        </div>
      </Informer>
      <FooterContainer />
    </>
  );
}
