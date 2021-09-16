import React, { Component } from 'react';
import { Container, FormControl, InputGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            items: []
        }
      }
     
    handleChange = (e) => {
        e.preventDefault();
        if (e.target.value.length < 3) {
            this.setState({
                items: []
            })
            return
        }

        fetch(`/search?name=${e.target.value}`)
            .then(response => response.json())
            .then(items => this.setState({ items }));
    }

    render() {
        
    return (
        <Container> 
                <InputGroup className="mb-3">
                    <FormControl onChange={this.handleChange}
                    placeholder="Begin typing the dish you want"
                    />
                </InputGroup>
                <ListGroup>
                    {this.state.items.map(item => (
                <ListGroupItem key={uuidv4()}>
                    <Link to={`/recipe/${item._id}`}>{item.name}</Link>
                </ListGroupItem>
                ))}
                </ListGroup>
        </Container>
    )}
}

export default Search;