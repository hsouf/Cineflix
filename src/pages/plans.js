import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Informer } from '../components';

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
    padding: '.75rem 25.33333333px',
    minWidth: '110px',
    minHeight: '48px',
    lineHeight: '19px',
    '&:hover': {
      background: COLORS.SECONDARY_COLOR,
    },
  },
})(Button);

const SecondaryCheck = withStyles({
  root: {
    color: COLORS.SECONDARY_COLOR,
    width: '30px',
    height: '30px',
    margin: '0 10px 0 -11px',
  },
})(CheckIcon);

const TertiaryCheck = withStyles({
  root: {
    color: COLORS.TERTIARY_COLOR,
    width: '30px',
    height: '30px',
  },
})(CheckIcon);

const GreyCheck = withStyles({
  root: {
    color: '#e0e0e0',
    width: '30px',
    height: '30px',
  },
})(CheckIcon);

export default function Plans({ ...props }) {
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

  const prices = new Map([
    ['Basic', '6 USD'],
    ['Standard', '9 USD'],
    ['Premium', '12 USD'],
  ]);

  const [state, setState] = useState({
    plan: props.location.state?.plan || 'Premium',
    price: props.location.state
      ? prices.get(props.location.state.plan) || prices.get('Premium')
      : prices.get('Premium'),
  });
  const tableRef = useRef(null);

  useEffect(() => {
    tableRef.current.childNodes.forEach((node) => {
      const array = [...node.children];
      array.forEach((element) => {
        if (element.ariaLabel === state.plan) element.style.color = COLORS.TERTIARY_COLOR;
        else element.style.color = '#e0e0e0';
      });
    });
  }, [state.plan]);

  const handleSelection = (event) => {
    const { value } = event.target;
    setState({ ...state, plan: value || 'Premium', price: prices.get(value) || '12 USD' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push({
      pathname: ROUTES.PAYMENT,
      state: { plan: state.plan, price: state.price },
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
            <form onSubmit={(e) => handleSubmit(e)} style={{ display: 'inherit' }}>
              <div>
                <div style={{ padding: '10px', textAlign: 'start', fontSize: '14px' }}>
                  <Informer.PreTitle>
                    STEP <span style={{ fontWeight: 'bold' }}>2</span> OF <span style={{ fontWeight: 'bold' }}>3</span>
                  </Informer.PreTitle>
                  <h2 style={{ margin: '0.75rem 0' }}>Choose the plan that's right for you</h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li
                      style={{
                        fontSize: '16px',
                        fontWeight: 'normal',
                        display: 'flex',
                        alignItems: 'center',
                        margin: '0 0 0 5px',
                      }}
                    >
                      <SecondaryCheck />
                      Watch all you want. Ad-free.
                    </li>
                    <li
                      style={{
                        fontSize: '16px',
                        fontWeight: 'normal',
                        display: 'flex',
                        alignItems: 'center',
                        margin: '0 0 0 5px',
                      }}
                    >
                      <SecondaryCheck />
                      <span>Recommendations just for you.</span>
                    </li>
                    <li
                      style={{
                        fontSize: '16px',
                        fontWeight: 'normal',
                        display: 'flex',
                        alignItems: 'center',
                        margin: '0 0 0 5px',
                      }}
                    >
                      <SecondaryCheck />
                      <span>Change or cancel your plan anytime.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'grid', margin: '20px 0' }}>
                <Informer.SelectWrapper onChange={(e) => handleSelection(e)}>
                  <Informer.Selection
                    defaultChecked={state.plan === 'Basic'}
                    id="plan_selection_1"
                    name="plan_group"
                    value="Basic"
                  >
                    <h4>Basic</h4>
                  </Informer.Selection>
                  <Informer.Selection
                    defaultChecked={state.plan === 'Standard'}
                    id="plan_selection_2"
                    name="plan_group"
                    value="Standard"
                  >
                    <h4>Standard</h4>
                  </Informer.Selection>
                  <Informer.Selection
                    defaultChecked={state.plan === 'Premium'}
                    id="plan_selection_3"
                    name="plan_group"
                    value="Premium"
                  >
                    <h4>Premium</h4>
                  </Informer.Selection>
                </Informer.SelectWrapper>
                <table ref={tableRef}>
                  <Informer.TableRow>
                    <Informer.TableFeature>Monthly price</Informer.TableFeature>
                    <Informer.TableCell aria-label="Basic">{prices.get('Basic')}</Informer.TableCell>
                    <Informer.TableCell aria-label="Standard">{prices.get('Standard')}</Informer.TableCell>
                    <Informer.TableCell aria-label="Premium">{prices.get('Premium')}</Informer.TableCell>
                  </Informer.TableRow>
                  <Informer.TableRow>
                    <Informer.TableFeature>Video quality</Informer.TableFeature>
                    <Informer.TableCell aria-label="Basic">Good</Informer.TableCell>
                    <Informer.TableCell aria-label="Standard">Better</Informer.TableCell>
                    <Informer.TableCell aria-label="Premium">Best</Informer.TableCell>
                  </Informer.TableRow>
                  <Informer.TableRow>
                    <Informer.TableFeature>Resolution</Informer.TableFeature>
                    <Informer.TableCell aria-label="Basic">480p</Informer.TableCell>
                    <Informer.TableCell aria-label="Standard">1080p</Informer.TableCell>
                    <Informer.TableCell aria-label="Premium">4K+HDR</Informer.TableCell>
                  </Informer.TableRow>
                  <Informer.NoBorderTableRow>
                    <Informer.TableFeature>Watch on your TV, computer and mobile</Informer.TableFeature>
                    <Informer.TableCell>
                      {state.plan === 'Basic' ? <TertiaryCheck /> : <GreyCheck />}
                    </Informer.TableCell>
                    <Informer.TableCell>
                      {state.plan === 'Standard' ? <TertiaryCheck /> : <GreyCheck />}
                    </Informer.TableCell>
                    <Informer.TableCell>
                      {state.plan === 'Premium' ? <TertiaryCheck /> : <GreyCheck />}
                    </Informer.TableCell>
                  </Informer.NoBorderTableRow>
                </table>
                <Informer.Footer>
                  HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and
                  device capabilities. Not all content is available in all resolutions. See our Terms of Use for more
                  details.
                </Informer.Footer>
                <Informer.Footer>
                  Only people who live with you may use your account. Watch on 4 different devices at the same time with
                  Premium, 2 with Standard and 1 with Basic.
                </Informer.Footer>
              </div>
              <div
                style={{
                  textAlign: 'center',
                  maxWidth: '440px',
                  margin: '0 auto',
                  marginTop: '36px',
                  padding: '0 16px',
                }}
              >
                <ConfirmButton type="submit">Continue</ConfirmButton>
              </div>
            </form>
          </Informer.Inner>
        </div>
      </Informer>
      <FooterContainer />
    </>
  );
}
