import React from "react";
import './header.scss';
import { Link } from "react-router-dom";
import { Github } from 'react-bootstrap-icons';
import { List } from 'react-bootstrap-icons';
import LogoWhite from "../header/logo-white.svg";

export class Navigation extends React.Component {
    render() {
        return (
            <nav class="nav-main-container">
                <Link  to="/"><img className="logo" src={LogoWhite} alt="Your SVG" /></Link>
                    <div className="nav-items-container">
                        <Link className="nav-items" to="/">About</Link>
                        <Link className="nav-items"  to="projects">Projects</Link>
                        <Link className="nav-items" to="/contact">Contact</Link>
                        <a className="nav-items" href="https://github.com/samuelhturcotte" target="_blank" rel="noreferrer" ><Github /></a>
                        <div class="dot"></div>
                    </div>
                <Link className="menu-link" to="/responsive"><List className="menu" /></Link>
            </nav>
        );
    }
}

