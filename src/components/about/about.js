import './about.scss';
import React from "react";


function About() {
    return (
        <div className="container2">
            
            <div className="about-intro-section">
                <img className="hellopic" src={require("../../assets/images/main-pictures/hello-dark-grey.png")} alt="recall" />

                <p className="about-text">
                    I am Samuel Turcotte, a detail-oriented Front-End Web Developer.<br/><br/>

                    As a hard-of-hearing individual, I strive to develop accessible and inclusive products to maximize the chances of everyone properly using them regardless of ability, context, or situation, which is a win for users and companies.<br /><br />

                    I am very passionate about the tech industry and cannot wait to continue growing my skill set and career over the coming years.
                </p>
            </div>
          



            <div>
                <h3 className="skill-section-title">Technical Skills</h3>
                <ul className="skill-point-container">
                    <li className="skill-point">HTML</li>
                    <li className="skill-point">CSS</li>
                    <li className="skill-point">SASS</li>
                    <li className="skill-point">React</li>
                    <li className="skill-point">Git</li>
                    <li className="skill-point">TypeScript</li>
                    <li className="skill-point">Javascript</li>
                    <li className="skill-point">Nest JS</li>
                    <li className="skill-point">Node JS</li>
                    <li className="skill-point">Responsive Design</li>
                    <li className="skill-point">Bootstrap</li>
                    <li className="skill-point">Contentful</li>
                    <li className="skill-point">Gatsby JS</li>
                    <li className="skill-point">CMS</li>
                </ul>

                <h3 className="skill-section-title">Design Skills</h3>
                <ul className="skill-point-container">
                    <li className="skill-point">Figma</li>
                    <li className="skill-point">InVision</li>
                    <li className="skill-point">Sketch</li>
                    <li className="skill-point">Adobe XD</li>
                    <li className="skill-point">Miro</li>
                    <li className="skill-point">Canva</li>
                    <li className="skill-point">UX Research</li>
                    <li className="skill-point">Prototyping</li>
                    <li className="skill-point">User Interface</li>
                    <li className="skill-point">User Experience</li>
                    <li className="skill-point">User-Centered Design</li>
                    <li className="skill-point">Wireframing</li>
                    <li className="skill-point">Information Architecture</li>
                    <li className="skill-point">Usability Testing</li>
                    <li className="skill-point">Web Content Accessibility Guidelines</li>
                </ul>

            </div>

        </div>
    );
}

export default About;



