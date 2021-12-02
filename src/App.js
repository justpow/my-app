import './App.css';
import './assets/bootstrap.min.css';
import React, { Button, Form, Row, Col } from 'react-bootstrap';
import {useState, useEffect } from 'react';
import api from './api-client'

function App() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPasswordError] = useState('');

  // Email field.
  const inputEmail = (e) => {
    setEmail(e.target.value);
  }

  // Username field.
  const inputUsername = (e) => {
    setUsername(e.target.value);
  }

  // Password field.
  const inputPassword = (e) => {
    setPassword(e.target.value)
  }


  const onSubmit = (e) => {
    e.preventDefault();
    setEmailError('')
    setPasswordError('')
    const submittedData = {
      email: email,
      username: username,
      pass: password,
    }
    
    // Request to login API.
    api.login(submittedData)
    .then(async res => {
      let resp = await res.json()
      if (resp.status == 200) {
        alert(resp.data);
        // Redirect ke page lain misalnya
      }
      else if (resp.status != 200) {
        for (let index = 0; index < Object.keys(resp.message).length; index++) {
            let data = Object.keys(resp.message)[index]
            if (data == 'email') {
              setEmailError(resp.message[data].message)
            } 
            
            if (data == 'pass') {
              setPasswordError(resp.message[data].message)
            }
        }
      } 
       else {
        alert(resp.data);
      } 
    })
    .catch(err => {
      alert(err)
    });
  } 

  
  return (
    <Row>
      <Col lg={4}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={inputEmail} />
            <Form.Text className="text-muted">
              {emailError}
        </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username   {email}</Form.Label>
            <Form.Control type="email" placeholder="Enter username" onChange={inputUsername} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
        </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={inputPassword} />
            <Form.Text className="text-muted">
             {passError}
        </Form.Text>
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
