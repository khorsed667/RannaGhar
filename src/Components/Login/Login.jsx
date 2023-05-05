import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = event => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = event => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      console.log(`Email: ${email}, Password: ${password}`);
      // TODO: add logic to authenticate user
    };

    return (
        <div>
            <Container className='my-4 border border-3 rounded border-black'>
                <Row className="justify-content-md-center mt-5">
                    <Col md={6}>
                        <h1 className="text-center mb-4">Login Page</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </Form.Group>

                            <Button className='my-3' variant="dark" type="submit" block>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;