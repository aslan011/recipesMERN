import React, { Component } from 'react';
import Search from './Search';
import Recipes from './Recipes';
import TagFilter from './Filter';
import { Col, Container, Image, Row } from 'react-bootstrap';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Meal from './pages/meal_detail'
import Switch from 'react-bootstrap/esm/Switch';

class App extends Component {
  constructor() {
    super()
    this.state = {
        items: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:9000/`)
        .then(response => response.json())
        .then(items => this.setState({items}))
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
            <Route path='/recipe/:id' component={Meal} />
          <Route exact path='/'>
            <Container>
              <Row>
                <Search />
              </Row>
              <Row>
                <TagFilter handleStateChange = {this.handleStateChange} />
              </Row>
              <Row>
                <Recipes items={this.state.items} />
              </Row>
            </Container>
        </Route>
      </Switch>
    </Router>
  );
}}

export default App;
