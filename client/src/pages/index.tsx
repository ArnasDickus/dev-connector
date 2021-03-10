import React from 'react';
import { NextPage } from 'next';
import LandingPage from 'components/page-components/landing/landing-page';

const Home: NextPage<any> = () => {
    return (
        <div>
            <LandingPage />
        </div>
    )
}

export default Home;