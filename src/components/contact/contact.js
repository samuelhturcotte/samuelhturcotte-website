import React from "react";
import './contact.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    return (

        <div>


            <Form name="contact" 
                action="https://formspree.io/f/xbjqzgya"
                method="POST"
            >

                <h2 className="form-title">Let's Connect</h2>

                <Form.Group className="section-container" controlId="formBasicEmail" >
                    <Form.Label className="section-label" >Name</Form.Label>
                    <Form.Control className="section-input" type="name" placeholder="Enter your name" />

                </Form.Group>

                <Form.Group className="section-container" controlId="formBasicPassword">
                    <Form.Label className="section-label">Email</Form.Label>
                    <Form.Control className="section-input" type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="section-container" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="section-label">Message</Form.Label>
                    <Form.Control className="section-message" placeholder="Write your message" as="textarea" rows={4} />
                </Form.Group>


                <Button className="contact-button" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>








        </div>

    );
}

export default BasicExample;