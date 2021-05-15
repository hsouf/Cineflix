import React from 'react';

import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';

export default function Subscribe() {
    return (
        <>
            <HeaderContainer homePage showButton={false} />
            <FooterContainer />
        </>
    );
}
