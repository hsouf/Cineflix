import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs';
import * as ROUTES from '../constants/routes';

export function FaqsContainer() {
  const history = useHistory();
  const [mailValue, setMailValue] = useState('');

  const pushSignup = (event) => {
    event.preventDefault();

    history.push({
      pathname: ROUTES.SIGN_UP,
      state: { mail: mailValue },
    });
  };

  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm onSubmit={(e) => pushSignup(e)}>
        <OptForm.Input
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          required
          onChange={(e) => setMailValue(e.target.value)}
          placeholder="Email address"
        />
        <OptForm.Button to={ROUTES.SIGN_UP}>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
