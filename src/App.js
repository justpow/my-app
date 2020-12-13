import './App.css';
import './assets/bootstrap.min.css';
import React, { Button, Form, Row, Col } from 'react-bootstrap';
import {useState, useEffect } from 'react';
import api from './api-client'

function App() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  // Email field.
  const inputEmail = (e) => {
    setEmail(e.target.value);
  }

  // Username field.
  const inputUsername = (e) => {
    setUsername(e.target.value);
  }


  const onSubmit = (e) => {
    e.preventDefault();
    const submittedData = {
      email: email,
      username: username,
    }
    
    // Request to register API.
    api.register(submittedData)
    .then(res => res.json())
    .then(json => {
      if (json.status == 200) {
        alert(json.data);
        // Redirect ke page lain misalnya
      } else {
        alert("The fields are mandatory");
      } 
    
    })
    .catch(err => {
      throw new Error(err)
    });
  } 

  
  return (
    <Row>
      <Col lg={4}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address {email}</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={inputEmail} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
        </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter username" onChange={inputUsername} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
        </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default App;
