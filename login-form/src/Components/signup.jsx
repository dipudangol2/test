import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "./signup.css"
import { Link } from 'react-router-dom';
const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, such as sending data to the server
        console.log('Form submitted:', formData);
    };

    return (
        <Container className='bg-dark'>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="my-4">Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword" className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm your password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                    <span>Already have an account?</span>
                    <Link to={"/login"}><Button>Log-In</Button></Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup