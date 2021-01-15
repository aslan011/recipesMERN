import React from 'react'
import { Button, Card, Container, ListGroupItem, Row } from 'react-bootstrap';

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
                            <a href={`/recipe/${item._id}`}><Button variant="primary">More details</Button></a>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
       </Container>
    )
} 

export default Recipes; 