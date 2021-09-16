import React, { Component } from 'react';
import {Accordion, Button, ButtonGroup} from 'react-bootstrap'

 
class TagFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requestSent: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/tags/tags?cuisine=${this.state.cuisine}&difficulty=${this.state.difficulty}`)
        .then(response => response.json())
        .then(items => {this.props.handleStateChange(items)})
    }

    handleClick = (e) => {
        this.setState({[e.target.parentNode.id]: e.target.textContent});
    }

    render() {
    return ( 
        <Accordion className="tagFilter">
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Difficulty
            </Accordion.Toggle>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Cuisine
            </Accordion.Toggle>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <Button id="tagSearch" onClick={this.handleSubmit} type="submit" value="Submit">Search</Button>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
            <ButtonGroup></ButtonGroup>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="0">
                <ButtonGroup id="difficulty">
                    <Button onClick={this.handleClick} className="tags" variant="secondary">Easy</Button>
                    <Button onClick={this.handleClick} className="tags"  variant="secondary">Medium</Button>
                    <Button onClick={this.handleClick} className="tags" variant="secondary">Hard</Button>
                </ButtonGroup>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
            <ButtonGroup id="cuisine">
                <Button onClick={this.handleClick} className="tags" variant="secondary">Italian</Button>
                <Button onClick={this.handleClick} className="tags"  variant="secondary">Mexican</Button>
                <Button onClick={this.handleClick} className="tags" variant="secondary">English</Button>
            </ButtonGroup>
            </Accordion.Collapse>
        </Accordion>
    )
}}

export default TagFilter;
