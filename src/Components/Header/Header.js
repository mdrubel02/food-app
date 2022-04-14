import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import  top  from '../../images/logo.png' 
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Container>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={top} width='200px' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                         <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        </Navbar.Text>
                        <Navbar.Text>
                          <Link to="/signUp">Sign Up</Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Link to="/login">Login</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;