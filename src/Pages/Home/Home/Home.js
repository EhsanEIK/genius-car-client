import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Produtcts from '../Products/Produtcts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Produtcts></Produtcts>
        </div>
    );
};

export default Home;