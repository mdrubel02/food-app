import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <div>
            <Container>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/breakFast">BreakFast</Nav.Link>
                            <Nav.Link as={Link} to="/dinner">Lunch</Nav.Link>
                            <Nav.Link as={Link} to="/lunch">Dinner</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default HomeHeader;