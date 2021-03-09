import React, { Component, useState } from 'react';
import { Accordion, Alert, Button, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import ModalWindow from '../ModalWindow';


function Meal(props) {
  console.log(props.location)
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
      <Row>
        <h1>{props.loggedIn}</h1>
        <h1 className="primary">{mealState.name}</h1>
      </Row>
      <Row>
        <h5 className="secondary">{mealState.cuisine}</h5>
        <h5 className="secondary">{mealState.difficulty}</h5>
      </Row>
      <Row>
      <ModalWindow meal = {mealState}/>
        <Button onClick={handleDelete}>Delete</Button>
      </Row>
      <Row>
      <Alert>{statusMessage}</Alert>
      </Row>
      <Row>
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
      </Row>
    </Container>
  )};

  return (
    <></>
  )
};

export default Meal;
