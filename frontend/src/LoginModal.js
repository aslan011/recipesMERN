import React, { useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';

function ModalWindow (props) {
  const [show, setShow] = useState(false);
  const [state, setState] = useState();
  const [statusMessage, setStatusMessage] = useState("testing");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:9000/login`
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(state),
      headers: new Headers({
          'Content-Type': 'application/json'
      })
    });

    fetch(request)
    .then(res => res.json())
    .then(res => handleStateChange(res.response))
    .catch(res => setStatusMessage(res.response));
  };

  const handleStateChange = (response) => {
    setStatusMessage(response);
    reloadWindowIfLoginSuccessful(response);
  }

  const reloadWindowIfLoginSuccessful = (response) => {
    console.log("hitting")
    if (response == "Login successful") {
      window.setTimeout(function() {
        handleClose();
      }, 500);
      props.setState({loggedIn: [response]});
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
        </Form>
    )
  };

  return (
      <>
        <Button onClick = {handleShow}>Login</Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {EditForm()}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={onSubmit}>Login</Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>            
          </Modal.Footer>
          <Alert>{statusMessage}</Alert>
        </Modal>
      </>
  )
};

export default ModalWindow