import React from "react";
import './responsive.scss';
import { Link } from "react-router-dom";
import { Github } from 'react-bootstrap-icons';
import { X } from 'react-bootstrap-icons';

function Responsive() {
    return (
        <div className="responsive-container">
            <div className="close-responsive-container">
                <Link to="/"><X className="close-responsive-menu" /></Link>
            </div>

            <ul className="responsive-container-menu">
                <li><Link className="menu-items" to="/">ABOUT</Link></li>
                <li><Link className="menu-items" to="/projects">PROJECTS</Link></li>
                <li><Link className="menu-items" to="/contact">CONTACT</Link></li>
                <li className="menu-items"><a className="responsive-menu-icons" href="https://github.com/samuelhturcotte" target="_blank" rel="noreferrer" ><Github /></a></li>
            </ul>
        </div>
    );
}

export default Responsive;