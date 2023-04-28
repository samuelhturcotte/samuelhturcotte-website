import React from "react";
import './card-template.scss'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';


function LessWaste() {

    return (
        <Link to="/case-studies/less-waste">
            <Card className="card-container" style={{ width: '18rem' }}>
                <div className="projects-lesswaste-img" />
                <h1 className="projects-title-responsive">Less Waste (Ux)</h1>
                <p className="projects-description-responsive">
                    Waste Management App </p>
            </Card>
        </Link>
    );
}

export default LessWaste;