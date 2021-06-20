import React, { Component, useState } from 'react';
import { Accordion, Alert, Button, Container, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import ModalWindow from '../components/ModalWindow';
import Search from '../components/Search';
import Recipes from '../components/Recipes';
import TagFilter from '../components/Filter';
import Login from '../components/LoginModal';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';


function Meals(props) {
  const user = props.state.loggedIn
  //const [user, setUser] = useState();

  if (user) {
    return (
      <Container>
    <Row>
      <Search />
    </Row>
    <Row>
      <Link to='/addMeal'><Button>Add meal</Button></Link>
    </Row>
    <Row>
      <TagFilter handleStateChange = {props.handleStateChange} />
    </Row>
    <Row>
      <Recipes items={props.state.items} loggedIn={props.state.loggedIn} />
    </Row>
    <Row>
      <Button onClick={() =>{props.loadRecipes()}}>View more</Button>
    </Row>
  </Container>
)
  }

  else {
  return (
                  <Container>
                <Row>
                  <Login setState={state => props.setState(state)}/>
                </Row>
                <Row>
                  <Search />
                </Row>
                <Row>
                  <TagFilter handleStateChange = {props.handleStateChange} />
                </Row>
                <Row>
                  <Recipes items={props.state.items} loggedIn={props.state.loggedIn} />
                </Row>
                <Row>
                  <Button onClick={() =>{props.loadRecipes()}}>View more</Button>
                </Row>
              </Container>
  )}
};

export default Meals;
