import './about.scss';
import React from "react";


function About() {
    return (
        
        <div className="about-container">

            <div className="about-intro-section">  
                <img className="hellopic" src={require("../../assets/images/main-pictures/Group 47.png")} alt="recall" />
                <p className="about-text">
                My name Samuel Turcotte, a detail-oriented Front-End Web Developer.<br/><br/>
                As a hard-of-hearing individual, I strive to develop accessible and inclusive products to maximize the chances of everyone properly using them regardless of ability, context, or situation, which is a win for users and companies.<br /><br />
                I am very passionate about the tech industry and cannot wait to continue growing my skill set and career over the coming years.
                </p>
            </div>
            
            <div container="skill-main-container" >
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

                <h3 className="other-skill-section-title">Design Skills</h3>
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
               
            <div class="experience-container">
                <h3 className="section-title">Experience</h3>
                <h4 className="small-title">Front-End Web Developer | President's Choice Financial</h4>
                <p class="time">May 2022 - Present, Toronto, ON</p>
                <ul class="description">
                    <li class="description-item">Implement websites, landing pages, and applications from concept through deployment, with a responsive, mobile-first approach.</li>
                    <li class="description-item">Adapted websites to match changing user preferences and client demands with regular updates.</li>
                    <li class="description-item">Worked with various teams and stakeholders to create and maintain digital experiences for multiple company products.</li>
                    <li class="description-item">Estimated project scope and participated in design discussions and code reviews.</li>
                    <li class="description-item">Engaged in quality assurance testing with emphasis on troubleshooting production issues.</li>
                    <li class="description-item">Tools: React, SASS, HTML, Figma, Git.</li>
                    
                </ul>
            </div>

            <div class="education-container" >
                <h3 className="other-section-title">Education</h3>
                <h4 className="small-title">Codecademy | Certificate, Front-End Engineer Career Path</h4>
                <p class="time">2022, Toronto, ON</p>
                <h4 className="small-title">BrainStation | Diploma, User Experience Design</h4>
                <p class="time">2021 - 2022, Toronto, ON</p>
            </div>

        </div>

    );
}

export default About;



