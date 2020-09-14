import React, { Component } from 'react';
import Search from './Search';
import Recipes from './Recipes';
import TagFilter from './Filter';
import { Col, Container, Image, Row } from 'react-bootstrap';

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
  );
}}

export default App;
