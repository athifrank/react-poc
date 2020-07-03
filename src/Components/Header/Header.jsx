import React, { Component } from "react";
import { Container, Navbar, Nav } from 'react-bootstrap'
import "../Header/Header.css";
class Header extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        );
    }

}

export default Header;