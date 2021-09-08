import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import Meal from './pages/meal_detail'
import addMeal from './pages/add_meal'
import Meals from './pages/Homepage'
import Switch from 'react-bootstrap/esm/Switch';
import Navbar from './components/NavBar';

class App extends Component {
  constructor() {
    super()
    this.state = {
        items: [],
        loggedIn: false,
        authUser: JSON.parse(localStorage.getItem('token'))
    }
  }

  componentDidMount() {
    if (this.state.authUser) this.setState({loggedIn: true});
    this.loadRecipes();
  }

  loadRecipes() {
    fetch(`http://localhost:9000/recipes`)
        .then(response => response.json())
        .then(items => this.setState({items}));
  }

  handleStateChange = (items, filter, term) => {
    this.setState({ items })
  }

  logout = () => {
    localStorage.removeItem('token')
    this.setState({loggedIn: false, authUser:""})
  }

  render() {
  return (
    <>
    <Navbar loggedIn={this.state.loggedIn} setState={state => this.setState(state)} logout = {this.logout}/>
    <Router>
        <Switch>
            <Route path='/addMeal' component={addMeal} />
            <Route path='/recipe/:id' component={Meal} />
            <Route path='/recipes' component={() => <Meals logout = {this.logout} handleStateChange={this.handleStateChange} state={this.state} loadRecipes={this.loadRecipes} setState={state => this.setState(state)}/>}/>
            <Route path="/" render={() => (<Redirect to="/recipes" />)} />    
        </Switch>
    </Router>
    </>
  );
}}

export default App;
