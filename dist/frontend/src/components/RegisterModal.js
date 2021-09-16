import React, { useState } from 'react';
import { Alert, Button, Form, Modal, Nav } from 'react-bootstrap';

function RegisterModal (props) {
  const [show, setShow] = useState(false);
  const [state, setState] = useState();
  const [statusMessage, setStatusMessage] = useState("Warning - Demo website");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (e) => {
    e.preventDefault();
    const url = `/register`
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(state),
      headers: new Headers({
          'Content-Type': 'application/json'
      })
    });

    fetch(request)
    .then(res => res.json())
    .then(res => handleStateChange(res))
    .catch(res => setStatusMessage(res));
  };

  const handleStateChange = (res) => {
    setStatusMessage(res.response);
    reloadWindowIfLoginSuccessful(res);
  }

  const reloadWindowIfLoginSuccessful = (res) => {
    if (res.response == "Registration successful") {
      setStatusMessage("Please log in with new credentials")
      window.setTimeout(function() {
        handleClose();
      }, 800);
      return      
    }
  };

  const onChange = (e) => {
    const name = e.target.id ;
    const value = e.target.value;
    const updatedState = {...state};
    updatedState[name] = value
    setState(updatedState)
  };

  const EditForm = () => {
    return (
        <Form onChange={(e) => {onChange(e)}}>
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="password2">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
        </Form>
    )
  };

  return (
      <>
        <Nav.Link onClick = {handleShow}>Register</Nav.Link>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {EditForm()}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={onSubmit}>Register</Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>            
          </Modal.Footer>
          <Alert>{statusMessage}</Alert>
        </Modal>
      </>
  )
};

export default RegisterModal;