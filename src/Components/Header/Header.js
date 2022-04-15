import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import top from '../../images/logo.png'
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../Loading/Loading';
// 


const Header = () => {
    const [user, loading] = useAuthState(auth);



    const handleLogOut = () => {
        signOut(auth);
    }
    if (loading) {
        return <Loading />
    }
    // if(user){
    //     navigate('/')
    // }
    return (
        <Container className='mb-3'>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={top} width='150px' alt="" />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link >
                            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        </Nav.Link>
                        {user?.uid ? <Nav.Link onClick={handleLogOut}>LogOut</Nav.Link> : <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>}
                        {user?.uid ? " " : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;