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

  const onChangeArray = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    const updatedState = {...mealState};
    const array = updatedState[id];
    const index = mealState[id].findIndex((a) => {return a == e.target.name})
    array[index] = value;
    setMealState(updatedState);
  };

  const EditForm = () => {
    return (
        <Form>
            <Form.Group controlId="name" onChange={(e) => {onChange(e)}}>
                <Form.Label>Meal name</Form.Label>
                <Form.Control type="text" defaultValue={`${mealState.name  || ""}`}/>
            </Form.Group>
            <Form.Group controlId="cuisine" onChange={(e) => {onChange(e)}}>
                <Form.Label>Cuisine</Form.Label>
                <Form.Control type="text" defaultValue={`${mealState.cuisine  || ""}`}/>
            </Form.Group>
            <Form.Group controlId="ingredients" onChange={(e) => {onChangeArray(e)}}>
                <Form.Label>Ingredients</Form.Label>
                {mealState.ingredients.map(ingredient => {
                  return <Form.Control type="text" name={ingredient} defaultValue={ingredient}/>
                })} 
            </Form.Group>
            <Form.Group controlId="instructions" onChange={(e) => {onChangeArray(e)}}>
                <Form.Label>Instructions</Form.Label>
                {mealState.instructions.map(instruction => {
                  return <Form.Control type="text" name={instruction} defaultValue={instruction}/>
                })} 
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