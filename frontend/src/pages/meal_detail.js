import React, { Component, useState } from 'react';
import { Accordion, Alert, Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import ModalWindow from '../ModalWindow';


function Meal(props) {

  const [mealState, setMeal] = useState();
  const [statusMessage, setStatusMessage] = useState()

  React.useEffect(() => {
    fetch(`http://localhost:9000/recipe/${props.match.params.id}/`)
    .then(response => response.json())
    .then(meal => setMeal(meal));
  },[])

  const handleDelete = (e) => {
    e.target.disabled = true;

    const url = `http://localhost:9000/recipe/${mealState._id}/delete`;

    const request = new Request(url, {
      method: 'DELETE'
    });

    fetch(request)
    .then(res => res.json())
    .then(res => setStatusMessage({statusMessage}))
    .then(window.setTimeout(function() {
      window.location.href = '/recipes';
    }, 1500))
    .catch(res => setStatusMessage({statusMessage}));
  };

  if (mealState) {

  return (
    <Container>
        <h2 className="primary">{mealState.cuisine}</h2>
        <h3 className="primary">{mealState.difficulty}</h3>
        <h1 className="primary">{mealState.name}</h1>

        <Accordion>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Steps
          </Accordion.Toggle>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Ingredients
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
              <p>Step appear here as a list</p>
            </Accordion.Collapse>
        </Accordion>
        <ModalWindow meal = {mealState}/>
        <Button onClick={handleDelete}>Delete</Button>
        <Alert>{statusMessage}</Alert>
    </Container>
  )};

  return (
    <></>
  )
};

export default Meal;
