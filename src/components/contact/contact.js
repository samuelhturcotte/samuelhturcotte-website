import React from "react";
import './contact.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    return (

        <div>


            <Form>

                <h2 className="form-title">Let's Connect</h2>

                <Form.Group className="section-container" controlId="formBasicEmail" >
                    <Form.Label className="section-label" >Email address</Form.Label>
                    <Form.Control className="section-input" type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="section-container" controlId="formBasicPassword">
                    <Form.Label className="section-label">Password</Form.Label>
                    <Form.Control className="section-input" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="section-container" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="section-label">Message</Form.Label>
                    <Form.Control className="section-message" placeholder="Message" as="textarea" rows={4} />
                </Form.Group>


                <Button className="contact-button" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>








        </div>

    );
}

export default BasicExample;