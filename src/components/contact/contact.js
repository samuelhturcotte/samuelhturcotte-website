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

                <Form.Group className="section-container" controlId="formBasicEmail">
                    <Form.Label className="section-label" for="name">Name</Form.Label>
                    <Form.Control className="section-input" id="name" type="text" name="name" placeholder="Enter your name" required/>

                </Form.Group>

                <Form.Group className="section-container" controlId="formBasicPassword">
                    <Form.Label className="section-label" for="email">Email</Form.Label>
                    <Form.Control className="section-input" id="email" type="email" name="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="section-container" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="section-label" for="message">Message</Form.Label>
                    <Form.Control className="section-message" id="message" name="message" placeholder="Write your message" as="textarea" rows={4} required />
                </Form.Group>


                <Button className="contact-button" variant="primary" name="submit" type="submit">
                    Submit
                </Button>
            </Form>








        </div>

    );
}

export default BasicExample;