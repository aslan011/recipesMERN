import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function ModalWindow (props) {
  const [show, setShow] = useState(false);
  const [mealState, setMealState] = useState(props.meal);
  const [res, setRes] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (e) => {
    setShow(false);
    e.preventDefault();
    const url = `http://localhost:9000/recipe/${mealState._id}`
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(mealState),
      headers: new Headers({
          'Content-Type': 'application/json'
      })
    });

    fetch(request)
    .then(res => res.json())
    .then(res => props.setMeal(res.meal))
    .then(res => setRes(res.statusMessage))
    .catch(res => console.log(res));
  };

  const onChange = (e) => {
    const name = e.target.id ;
    const value = e.target.value;
    const updatedState = {...mealState};
    updatedState[name] = value
    setMealState(updatedState)
  };

  const EditForm = () => {
    return (
        <Form onChange={(e) => {onChange(e)}}>
            <Form.Group controlId="name">
                <Form.Label>Meal name</Form.Label>
                <Form.Control type="text" defaultValue={`${mealState.name  || ""}`}/>
            </Form.Group>
            <Form.Group controlId="cuisine">
                <Form.Label>Cuisine</Form.Label>
                <Form.Control type="text" defaultValue={`${mealState.cuisine  || ""}`}/>
            </Form.Group>
            <Form.Group controlId="ingredients">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control as="textarea" rows={5} defaultValue={`${mealState.ingredients  || ""}`}/>
            </Form.Group>
            <Form.Group controlId="instructions">
                <Form.Label>Instructions</Form.Label>
                <Form.Control as="textarea" rows={5} defaultValue={`${mealState.instructions || ""}`}/>
            </Form.Group>
        </Form>
    )
  };

  return (
      <>
        <Button onClick = {handleShow}>Edit</Button>
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
            <Button variant="primary" onClick={onSubmit}>Save</Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  )
};

export default ModalWindow