import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Alert } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

class addMeal extends Component {
  constructor() {
    super()
    this.state = {
      res: [],
      ingredientsCount: 1,
      instructionsCount: 1
    }
  };

  handleMultiChange = (e) => {
    const key = e.target.id;
    const inputElements = document.getElementById(key).getElementsByTagName("input");
    const inputs = [];
    for (let i = 0; i < inputElements.length; i++) {
      const input = inputElements[i].value;
      inputs.push({item: [input], key: uuidv4()});
    }
    this.setState({[key]: inputs})
    console.log(this.state);
  }

  addInputField = (e) => {
    const key = e.target.name + "Count";
    this.setState({[key]: this.state[key] + 1})
  }

  renderInputFields = (name) => {
    const formInputs = [];
    const key = name + "Count";
    for (let i = 0; i < this.state[key]; i++){
      formInputs.push(<Form.Control type="text"/>)
    }

    return formInputs
  }

  onChange = (e) => {
    const name = e.target.id ;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  onSubmit = (e) => {
    const nodeArr = e.target.childNodes;
    nodeArr[nodeArr.length - 1].disabled = true;
    e.preventDefault();
    const url = 'http://localhost:9000/addMeal';

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: new Headers({
          'Content-Type': 'application/json'
      })
    });

    fetch(request)
    .then(res => res.json())
    .then(res => this.setState({res}))
     .then(window.setTimeout(function() {
      window.location.href = '/';
    }, 1500))
    .catch(res => this.setState({res}));
  };

  render() {
  let statusMessage = null;
  if (this.state.res.statusMessage) { statusMessage = this.state.res.statusMessage};

  return (
    <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="name" onChange={this.onChange}>
            <Form.Label>Meal name</Form.Label>
            <Form.Control type="text"/>
        </Form.Group>
        <Form.Group controlId="cuisine" onChange={this.onChange}>
            <Form.Label>Cuisine</Form.Label>
            <Form.Control type="text"/>
        </Form.Group>
        <Form.Group controlId="difficulty" onChange={this.onChange}>
            <Form.Label>Difficulty</Form.Label>
            <Form.Control type="text"/>
        </Form.Group>
        <Form.Group controlId="ingredients" id="ingredients" onChange={this.handleMultiChange}>
            <Form.Label>Ingredients</Form.Label>
            {this.renderInputFields("ingredients")}
            <Button name="ingredients" onClick={this.addInputField}>Add ingredient</Button>
        </Form.Group>
        <Form.Group controlId="instructions" id="instructions" onChange={this.handleMultiChange}>
            <Form.Label>Instructions</Form.Label>
            {this.renderInputFields("instructions")}
            <Button name="instructions" onClick={this.addInputField}>Add instruction</Button>
        </Form.Group>
        <Button variant="primary" id = "submit" type="submit">
          Submit
        </Button>
        <Alert>{statusMessage}</Alert>
    </Form>
  )
  };
};

/* name: {type: String, required: true},
ingredients: {type: [String], required: true},
cuisine: {type: String, required: true},
difficulty: {type: String},
description: {type: String},
instructions: {type: String},
tags: {type: [String]} */

export default addMeal;
