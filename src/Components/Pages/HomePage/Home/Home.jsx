import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Others/Info';
import Services from '../Others/Services';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner/>
            <Info/>
            <Services/>
        </div>
    );
};

export default Home;