import React from 'react';
import Footer from '../../Footer/Footer';
import Carousel from '../Carousel/Carousel';
import Client from '../Client/Client';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
             <Header></Header>
             <Client></Client>
             <Services></Services>
             <Carousel></Carousel>
             <ClientFeedback></ClientFeedback>
             <Footer></Footer>
        </div>
    );
};

export default Home;