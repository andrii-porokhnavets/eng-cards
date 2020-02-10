import React from 'react';
import data from './words';

import Page from './Page';


function Home() {
    return (
        <div className={'mainContainer'}>
            <Page cards={data} />
        </div>
    );
}

export default Home;
