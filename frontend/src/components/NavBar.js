import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Login from './LoginModal';

function NavigationBar(props) {
    const LoginOption = ()=> {
        if (props.loggedIn) {
            return <Nav.Link onClick={props.logout}>Logout</Nav.Link>
        }
        else {
            return <Login setState={state => props.setState(state)}/>
        }
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/recipes">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
            <Nav className="me-auto">
            <LoginOption />
            </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
            <Nav>
            <Nav.Link href='https://github.com/aslan011/recipesMERN'>See the code</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
};

export default NavigationBar;