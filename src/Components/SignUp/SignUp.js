import React, { useRef, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase.init'
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
   // input value
    const nameRef= useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef ('');
    const [error,setError] = useState('');
    const navigate = useNavigate();

    //firebase hooks 
    const [
        createUserWithEmailAndPassword,
        user,
        loading
      ] = useCreateUserWithEmailAndPassword(auth);
      if(loading){
          return <Loading />
      }
      if(user){
          navigate('/')
      }
     


    // create user
    const handleCreateUser = (event) =>{
        event.preventDefault();
        const name =nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(password.length >6){
            setError('place six character minimum')
            return
        }
        // console.log('name:',name, 'email',email, 'password', password);
        createUserWithEmailAndPassword(email,password)
    }


    return (
        <Container>
            <Row>
                <Col></Col>
                <Col md={6} lg={6}>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={handleCreateUser}>
                                <Form.Group className="mb-5" >
                                    <img src={logo} width='100%' alt="" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control ref={nameRef} className='input-field' type="text" placeholder="Enter Name" required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control ref={emailRef} className='input-field' type="email" placeholder="Enter email" required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control ref={passwordRef} className='input-field' type="password" placeholder="Password" required />
                                  
                                </Form.Group>
                                <p className='text-danger'>{error}</p>
                        
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

export default SignUp;