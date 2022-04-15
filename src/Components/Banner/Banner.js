import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../images/bannerbackground.png'

const Banner = () => {
    return (
        <Container fluid style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '500px', }} className='mt-3 ml-0 px-0' >
            
        </Container>
    );
};

export default Banner;