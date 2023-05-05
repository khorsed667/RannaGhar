import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app)

const Registration = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [error, setError] = useState('')

  const handleFirstNameChange = event => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = event => {
    setLastName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };

  const handlePhotoUrlChange = event => {
    setPhotoUrl(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault(); 
    
    if(password == confirmPassword){
      setError("your password did not match")
      return
    }
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser);
      })
      .then(error => {
        console.log(error);
      })
  };

  return (
    <div>
      <Container className='my-4 border border-3 rounded border-black'>
        <Row className="justify-content-md-center mt-5">
          <Col md={6}>
            <h1 className="text-center mb-4">Sign Up Page</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPhotoUrl">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter photo URL"
                value={photoUrl}
                onChange={handlePhotoUrlChange}
              />
            </Form.Group>

              <Button className='my-3' variant="dark" type="submit" block>
                Sign Up
              </Button>
              <div className='p-2'>
                <p>Already have an account? Please <Link to='/login'>Login</Link></p>
              </div>

              {error}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;