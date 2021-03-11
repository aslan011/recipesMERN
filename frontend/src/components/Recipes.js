import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Recipes(props) {
    return (
        <Container>
           <Row>
                {props.items.map(item => (
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Link to={`/recipe/${item._id}`} variant="primary">More details</Link>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
       </Container>

    )
} 

export default Recipes; 