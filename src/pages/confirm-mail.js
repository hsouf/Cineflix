import React from 'react';

import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';

export default function ConfirmMail() {
    return (
        <>
            <HeaderContainer homePage showButton={false} />
            <FooterContainer />
        </>
    );
}
