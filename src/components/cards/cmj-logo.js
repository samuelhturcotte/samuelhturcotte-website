import React from "react";
import './card-template.scss';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function CmjLogo() {

    return (
        <Link to="/work/cmj-logo-work">
            <Card className="card-container" style={{ width: '18rem' }}>
                <div className="projects-cmj-logo" />
                <h1 className="projects-title-responsive">CMJ Logo</h1>
                <p className="projects-description-responsive">
                    Cricut Making Business </p>
            </Card>
        </Link>
    );
}

export default CmjLogo;