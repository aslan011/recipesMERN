import React, { Component } from 'react';
import Search from './Search';
import Recipes from './Recipes';
import TagFilter from './Filter';
import Login from './LoginModal';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Meal from './pages/meal_detail'
import addMeal from './pages/add_meal'
import Switch from 'react-bootstrap/esm/Switch';

class App extends Component {
  constructor() {
    super()
    this.state = {
        items: [],
        loggedIn: "Not logged in"
    }
  }

  componentDidMount() {
    this.loadRecipes();
  }

  loadRecipes() {
    fetch(`http://localhost:9000/recipes`)
        .then(response => response.json())
        .then(items => this.setState({items}));
  }

  handleStateChange = (items, filter, term) => {
/*     if (items == null) {
      const filterState = this.state.items.filter(item => item[filter] === term)
      this.setState({items: filterState})
      return
    } */
    this.setState({ items })
  }

  render() {
  return (
    <Router>
        <Switch>
            <Route path='/addMeal' component={addMeal} />
            <Route path='/recipe/:id' component={Meal} />
            <Route path='/recipes'>
              <Container>
                <Row>
                  <Link to='/addMeal'>Add meal</Link>
                  <Login setState={state => this.setState(state)}/>
                </Row>
                <Row>
                  <Search />
                </Row>
                <Row>
                  <TagFilter handleStateChange = {this.handleStateChange} />
                </Row>
                <Row>
                  <Recipes items={this.state.items} loggedIn={this.state.loggedIn} />
                </Row>
                <Row>
                  <Button onClick={() =>{this.loadRecipes()}}>View more</Button>
                </Row>
              </Container>
            </Route>
        </Switch>
    </Router>
  );
}}

export default App;
