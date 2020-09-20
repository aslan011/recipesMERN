import React, { Component } from 'react';
import { Accordion, Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap';


class Meal extends Component {
  constructor() {
    super()
    this.state = {
      meal: {
        ingredients: []
      }
    }
  }

  componentDidMount() {
    fetch(`http://localhost:9000/recipe/${this.props.match.params.id}/`)
        .then(response => response.json())
        .then(meal => this.setState({meal}))
  }

  render() {
  return (
    <Container>
        <h1 class="primary">{this.state.meal.name}</h1>
        <h2 class="primary">{this.state.meal.cuisine}</h2>
        <h3 class="primary">{this.state.meal.difficulty}</h3>

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
            <Accordion.Collapse eventKey="1">
            <ListGroup>
                    {this.state.meal.ingredients.map(item => (
                <ListGroupItem>
                    {item}
                </ListGroupItem>
                ))}
              </ListGroup>
            </Accordion.Collapse>
        </Accordion>
    </Container>
  );
}}

export default Meal;
