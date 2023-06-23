import React, { useState } from 'react'
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap'
import { Link } from "react-router-dom"
import './SignUp.css'
import { useSignupMutation } from '../services/appApi'


function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [signup, { error, isLoading, isError }] = useSignupMutation();
    function handleSignup(e) {
        e.preventDefault();
        signup({ name, email, password });

    }


    return (
        <Container>
            <Row>
                <Col md={6} className="signup__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleSignup} >
                        <h1>Create account</h1>
                        {isError && <Alert variant='danger'> {error.data}</Alert>}
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Addres</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit" disabled={isLoading}>Login</Button>

                        </Form.Group>
                        <p>Have an account? <Link to="/login">Login</Link>{""}
                        </p>
                    </Form>
                </Col>
                <Col md={6} className="signup__image--container"></Col>

            </Row>
        </Container>
    )
}

export default SignUp