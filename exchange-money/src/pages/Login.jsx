import React, { useState, useEffect }from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

function Login() {
    const history = useHistory();

  

    const check = () => {
        // stored data from the register-form
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('surname');

    // entered data from the login-form
    var userName = document.getElementById('name');
    var userPw = document.getElementById('surname');

    // check if stored data from register-form is equal to data from login form
    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    }else {
        history.push("/home");
    }
    }

    return (
        <Container>
            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Login</h1>
            <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <Form>
                        <Form.Group >
                            <Form.Label>Name</Form.Label>
                            <Form.Control id="name" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Surname</Form.Label>
                            <Form.Control id="surname" placeholder="Enter your surname" />
                        </Form.Group>

                        <div class="col-md-12 mt-5 text-center">
                            <Button class="btn btn-primary" type="submit" onClick={check}>
                                Login
                            </Button>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to={"/sign-up"}>Register now</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}
export default Login;