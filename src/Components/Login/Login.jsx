import React from 'react'
import { withRouter } from 'react-router-dom'
import { Form,Button,Row,Col,Container } from 'react-bootstrap'
import "../Login/Login.css";
const Login = ({ history }) => {
    const formSubmit = (e) => {
        e.preventDefault();
        history.push('/process')

    }
    return (
        <div>
        <Container>
            <Form onSubmit={formSubmit} autoComplete="off">
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
               </Form.Label>
                    <Col sm="4">
                        <Form.Control type="text" placeholder="email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                </Form.Label>
                    <Col sm="4">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
        </div>
    )
}

export default withRouter(Login);
