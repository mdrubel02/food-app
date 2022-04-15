import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../images/bannerbackground.png'


const Home = () => {
    return (
        <Container style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px', }}>
            <h1>This Is Home Page</h1>
        </Container>

        

    );
};

export default Home;