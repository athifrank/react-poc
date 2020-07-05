import React from 'react'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import { Form,Button,Row,Col,Container } from 'react-bootstrap'
import "../Login/Login.css";
import * as actions from '../../actions'

const Login = ({ history,name,getData }) => {
    console.log('data ',name)
    const formSubmit = (e) => {
        e.preventDefault();
        //history.push('/process')
        getData()

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

const mapStateToProps=(state)=>{
    return{
        name:state.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getData:()=>dispatch(actions.Login())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));
