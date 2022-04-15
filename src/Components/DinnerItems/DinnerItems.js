import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DinnerItems.css'

const DinnerItems = ({ dinner }) => {
    const { picture, name, description,price } = dinner
    console.log(dinner);
    return (
        <Container>
            <Link to='/another'>
                <Col className=''>
                    <Card className='p-5 text-center'>
                        <Card.Img variant="top"  src={picture} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Card.Text>
                                Price: {price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Link>
        </Container>
    );
};

export default DinnerItems;