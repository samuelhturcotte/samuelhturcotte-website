import React from "react";
import './header.scss';
import { Link } from "react-router-dom";
import { Linkedin } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';
import { List } from 'react-bootstrap-icons';
import LogoWhite from "../header/logo-white.svg";





export class Navigation extends React.Component {
    render() {
        return (
            <nav class="nav-main-container">
                <Link  to="/"><img className="logo" src={LogoWhite} alt="Your SVG" /></Link>
       
            
                

                    <ul className="nav-items-container">
                        <li className="nav-items"><Link to="/">Projects</Link></li>
                        <li className="nav-items"><Link to="/about">About</Link></li>
                        <li className="nav-items"><Link to="/contact">Contact</Link></li>
                        <li className="nav-icons"><a href="https://github.com/samuelhturcotte" target="_blank" rel="noreferrer" ><Github /></a></li>
                        <li className="nav-icons"><a href="https://linkedin.com/in/samuelhturcotte" target="_blank" rel="noreferrer" ><Linkedin /></a></li>
                    </ul>

                <Link className="menu-link" to="/responsive"><List className="menu" /></Link>
            </nav>
        );
    }
}

