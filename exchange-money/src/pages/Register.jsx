import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [total, setTotal] = useState(10000);

    const history = useHistory();

    const handle = (e) => {

        e.preventDefault();

        localStorage.setItem('name', name);
        localStorage.setItem('surname', surname);
        setTotal(total);
        localStorage.setItem('USD', total);

        if(name=="" || surname=="" ){
                alert("Please enter name and surname")
        }
       else{
           history.push("/sign-in");
       }
     };

    return (
        <Container>
            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Register</h1>
            <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Surname</Form.Label>
                            <Form.Control placeholder="Enter your surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                        </Form.Group>
                        
                        <div class="col-md-12 mt-5 text-center">
                        <Button class="btn btn-primary" type="submit" onClick={handle}>
                            Register
                        </Button>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to={"/sign-in"}>Login here</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Register;