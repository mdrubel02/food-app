import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../images/bannerbackground.png'

const Banner = () => {
    return (
        <Container style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '500px', }} className='mt-3' >
            <h1>This Is Home Page</h1>
        </Container>
    );
};

export default Banner;