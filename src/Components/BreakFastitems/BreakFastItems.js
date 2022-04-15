import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BreakFastItems = ({breakFastItem}) => {
    const {picture,price,description,name,} =breakFastItem;
    return (
      <Container>
          <Link to='/anotherPage'>
                <Col>
                    <Card className='p-5 text-center'>
                        <Card.Img variant='top' src={picture}></Card.Img>
                        <Card.Body>
                            <Card.Title> {name}</Card.Title>
                            <Card.Text> {description}</Card.Text>
                            <Card.Text>Price: { price }</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
          </Link>
      </Container>
    );
};

export default BreakFastItems;