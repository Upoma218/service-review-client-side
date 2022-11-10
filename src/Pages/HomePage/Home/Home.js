import React from 'react';
import useTitle from '../../../Hook/useTitle';
import About from '../../About/About';
import Menu from '../../Menu/Menu';
import Services from '../../Services/Services/Services';
import Banners from '../Banners/Banners';


const Home = () => {
    useTitle('Flora-The-Chef/Home');
    return (
        <div>
            <Banners></Banners>
            <About></About>
            <Services></Services>
            <Menu></Menu>
        </div>
    );
};

export default Home;