import React from 'react';
import { Footer } from '../components';

export const FooterContainer = () => (
  <Footer>
    <Footer.Title>Questions? Contact us.</Footer.Title>
    <Footer.Break />
    <Footer.Row>
      <Footer.Column>
        <Footer.Link href="#">FAQ</Footer.Link>
      </Footer.Column>

      <Footer.Column>
        <Footer.Link href="#">Contact Us</Footer.Link>
      </Footer.Column>

      <Footer.Column>
        <Footer.Link href="#">Terms of Use</Footer.Link>
      </Footer.Column>

      <Footer.Column>
        <Footer.Link href="#">Legal Notices</Footer.Link>
      </Footer.Column>
    </Footer.Row>
    <Footer.Break />
    <Footer.Text>Titflix</Footer.Text>
  </Footer>
);
