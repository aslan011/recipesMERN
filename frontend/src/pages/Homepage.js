import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Search from '../components/Search';
import Recipes from '../components/Recipes';
import TagFilter from '../components/Filter';
import { Link } from 'react-router-dom';


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
            <Search />
          </Row>
          <Row>
          <h5 className="secondary">Log in to add a meal</h5>
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
