import React from "react";
import './card-template.scss';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Recall() {

    return (
            <Link to="/case-studies/recall">
                <Card className="card-container" style={{ width: '18rem' }}>
                    <div className="projects-recall-img" />
                    <h1 className="projects-title-responsive">Recall(Ux)</h1>
                    <p className="projects-description-responsive">
                    Subscriptions manager. </p>
                </Card>
            </Link>
    );
}

export default Recall;