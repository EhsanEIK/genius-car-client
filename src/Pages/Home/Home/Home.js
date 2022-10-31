import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Produtcts from '../Products/Produtcts';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Produtcts></Produtcts>
            <Team></Team>
        </div>
    );
};

export default Home;