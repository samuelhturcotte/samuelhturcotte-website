import React from "react";
import './project-cards.scss';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

function IntroPicture() {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className="projects-container">
            <Link to="/case-studies/recall">
                <Card className="hvr-grow" style={{ width: '18rem' }}>
                    <Card.Img className="projects-img" variant="top" src={require("../../assets/images/main-pictures/recallpic.png")} alt="recall" style={loaded ? {} : { display: 'none' }}
                        onLoad={() => setLoaded(true)} />
                    <Card.Body>
                        <Card.Title className="projects-title">Recall</Card.Title>
                        <Card.Text className="projects-description">
                            Subscriptions manager.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}

export default IntroPicture;