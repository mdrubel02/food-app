import React, { useRef } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase.init';
import logo from '../../images/logo2.png'
import Loading from '../Loading/Loading';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

  
    //user login code
    const [signInWithEmailAndPassword,signInUser,loadingUser] = useSignInWithEmailAndPassword(auth)

    if(loadingUser){
        return <Loading />
    }
    if(signInUser){
        navigate('/')
    }

    const handleLoginUser = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        signInWithEmailAndPassword(email,password)

    }

    return (
        <Container className='login'>
            <Row>
                <Col></Col>
                <Col md={6} lg={6}>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={handleLoginUser}>
                                <Form.Group className="mb-5 " >
                                    <img  src={logo} width='100%' alt="" />
                                </Form.Group>
                               
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />

                                </Form.Group>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                {/* <p className='text-danger'>{error}</p> */}

                                <Button className='w-100' variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
            <Row></Row>
        </Container>
    );
};

export default Login;