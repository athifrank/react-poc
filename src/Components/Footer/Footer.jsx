import React, { Component } from "react";
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import  "../Footer/Footer.css";
class Footer extends Component {
    render() {
        return(
            <Navbar bg="primary" dark>
                    <span>Footer</span>
            </Navbar>
        );
    }

}

export default Footer;