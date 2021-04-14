import React, { Component, useState } from 'react';
import { Accordion, Alert, Button, Card, Container, FormGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import ModalWindow from '../components/ModalWindow';


function Meal(props) {
  const [mealState, setMeal] = useState();
  const [statusMessage, setStatusMessage] = useState()
  const user = JSON.parse(localStorage.getItem('token'));

  
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
    }, 100))
    .catch(res => setStatusMessage({statusMessage}));
  };

  const Accordian = () => {
    return (
          <Accordion>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Steps
              </Accordion.Toggle>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Ingredients
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
              <ListGroup>
                {mealState.instructions && mealState.instructions.map(step => (
                        <ListGroupItem>
                            {step}
                        </ListGroupItem>
                ))}
            </ListGroup>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
              <ListGroup>
                {mealState.ingredients && mealState.ingredients.map(ingredient => (
                  <ListGroupItem>
                            {ingredient}
                        </ListGroupItem>
                ))}
            </ListGroup>
                </Accordion.Collapse>
            </Accordion>
    )
  };

  if (mealState && user != null) {

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
      <ModalWindow meal = {mealState} setMeal={setMeal}/>
        <Button onClick={handleDelete}>Delete</Button>
        </Row>
          <Row>
          <Alert>{statusMessage}</Alert>
          </Row>
          <Row>
            {Accordian()}
       </Row>
    </Container>
  )}

  else if (mealState) {
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
        {Accordian()}
       </Row>
    </Container>
    )}

  return (
    <></>
  )
};

export default Meal;
