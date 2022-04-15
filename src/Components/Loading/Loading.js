import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <Container style={{height:'400px'}} className=' d-flex justify-content-center algin-items-center'>
            <Spinner animation="border" variant="primary" />
        </Container>
    );
};

export default Loading;