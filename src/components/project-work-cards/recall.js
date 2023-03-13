import React from "react";
import './project-work-cards.scss';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Recall() {

    return (
            <Link to="/case-studies/recall">
                <Card className="card-container" style={{ width: '18rem' }}>
                    <div className="projects-img" />
                    <h1 className="projects-title-responsive">Recall</h1>
                    <p className="projects-description-responsive">
                    Subscriptions manager. </p>
                </Card>
            </Link>
    );
}

export default Recall;