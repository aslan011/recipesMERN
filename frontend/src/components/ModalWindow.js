import React, { useState} from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function ModalWindow (props) {
  const [show, setShow] = useState(false);
  const [mealState, setMealState] = useState(props.meal);
  const [res, setRes] = useState();

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

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
    const index = mealState[id].findIndex((a) => {return a.item == e.target.name})
    array[index].item = value;
    setMealState(updatedState);
  };

  const removeInputField = (e) => {
    const updatedState = {...mealState};
    const name = e.target.name;
    const index = mealState[name].findIndex((a) => {return a.item == e.target.id});
    updatedState[name].splice(index, 1);
    setMealState(updatedState);
  };

  const addField = (e) => {
    const updatedState = {...mealState};
    const name = e.target.name;
    updatedState[name] = [...mealState[name], {item: "", key: uuidv4()}];
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
            <Form.Group controlId="ingredients" onChange={onChangeArray}>
                <Form.Label>Ingredients</Form.Label>
                {mealState.ingredients.map((ingredient, index) => {
                  return (
                    <Row key={ingredient.key} nogutters="true">
                      <Col nogutters="true" lg="auto">
                        <Form.Control type="text" name={ingredient.item} defaultValue={ingredient.item}/>
                      </Col>
                      <Col nogutters="true" lg="auto">
                        <Button variant="link" className="removeFormField" id={ingredient.item} name="ingredients" onClick={removeInputField}>x</Button>
                      </Col>
                    </Row>
                  )
                })} 
              <Button name="ingredients" onClick={addField}>Add</Button>
            </Form.Group>
            <Form.Group controlId="instructions" onChange={onChangeArray}>
                <Form.Label>Instructions</Form.Label>
                {mealState.instructions.map((instruction, index) => {
                  return (
                    <Row key={instruction.key} nogutters="true">
                      <Col nogutters="true" lg="auto">
                      <Form.Control type="text" name={instruction.item} defaultValue={instruction.item}/>
                      </Col>
                      <Col nogutters="true" lg="auto">
                        <Button variant="link" className="removeFormField" id={instruction.item} name="instructions" onClick={removeInputField}>x</Button>
                      </Col>
                    </Row>
                  )
                })}
                <Button name="instructions" onClick={addField}>Add</Button>
            </Form.Group>
        </Form>
    )
  };

  if (mealState.ingredients && mealState.instructions) {
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
  }

  return <></>
};

export default ModalWindow