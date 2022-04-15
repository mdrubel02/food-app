import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LunchItems = (props) => {
    console.log(props.lunch)
    
    
    return (
        <Container>
            <Link to='/another'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top"  />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
            </Link>
        </Container>
    );
};

export default LunchItems;