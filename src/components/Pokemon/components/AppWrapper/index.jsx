import React from 'react';

import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';


export const AppWrapper = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}