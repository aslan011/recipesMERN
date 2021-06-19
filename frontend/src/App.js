import React, { Component } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import {Route, BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
import Meal from './pages/meal_detail'
import addMeal from './pages/add_meal'
import Meals from './pages/Homepage'
import Switch from 'react-bootstrap/esm/Switch';

class App extends Component {
  constructor() {
    super()
    this.state = {
        items: [],
        loggedIn: false,
        authUser: JSON.parse(localStorage.getItem('token')),
    }
  }

  componentDidMount() {
    if (this.state.authUser) this.setState({loggedIn: true});
    this.loadRecipes();
  }

  loadRecipes() {
    fetch(`https://pick-a-meal876543.herokuapp.com/recipes`)
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

  logout = () => {
    localStorage.removeItem('token')
    this.setState({loggedIn: false, authUser:""})
  }

  render() {
  return (
    <Router>
        <Switch>
            <Route path='/addMeal' component={addMeal} />
            <Route path='/recipe/:id' component={Meal} />
            <Route path='/recipes' component={() => <Meals logout = {this.logout} handleStateChange={this.handleStateChange} state={this.state} loadRecipes={this.loadRecipes} setState={state => this.setState(state)}/>}/>
            <Route path="/" render={() => (<Redirect to="/recipes" />)} />    
        </Switch>
    </Router>
  );
}}

export default App;
