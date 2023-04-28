import './about.scss';
import React from "react";

function About() {
    return (
        <div className="about-container">
            <div className="about-intro-section">  
                <img className="hellopic" src={require("../../assets/images/main-pictures/hello-img.png")} alt="recall" />
                <p className="about-text">
                    My name is Samuel Turcotte, a creative and detail-oriented Front-End Developer with a UX Design education background.<br/><br/>
                    As a hard-of-hearing individual, I’ve had to overcome many different challenges throughout my life. It has made me someone that 
                    can adapt to all sorts of environments and find creative solutions to any problems I can face both in life as well as when it comes to web development.<br /><br />
                    Getting a UX education gave me a good understanding of the full process which helps me see the bigger picture and bridge the gap between designers and developers. 
                    It has also given me a sharp eye for detail that helps me build aesthetic, usable, and well-designed software.<br /><br />
                    Over time I discovered a love for turning my design into fully functioning software which made me want to learn coding which I can now consider my passion. 
                    I am a proud self-taught developer with professional experience, and I am constantly striving to learn more and always get better.<br /><br />
                    My life experiences, education and tech passion have truly helped me become an asset in any project I am working on and cannot wait to continue 
                    developing my skillset and career over the next coming years.
                </p>

                <div class="education-container" >
                    <h3 className="other-section-title">Education</h3>
                    <h4 className="small-title">Codecademy | Certificate, Front-End Engineer Career Path</h4>
                    <p class="time">2022, Toronto, ON</p>
                    <h4 className="small-title">BrainStation | Diploma, User Experience Design</h4>
                    <p class="time">2021 - 2022, Toronto, ON</p>
                </div>
            </div>
            
            <div container="skill-main-container" >

                <h3 className="skill-section-title">Technical Skills</h3>
                    <ul className="skill-point-container">
                        <li className="skill-point">HTML</li>
                        <li className="skill-point">CSS</li>
                        <li className="skill-point">SASS</li>
                        <li className="skill-point">React</li>
                        <li className="skill-point">TypeScript</li>
                        <li className="skill-point">Javascript</li>
                        <li className="skill-point">NestJS</li>
                        <li className="skill-point">Node.js</li>
                        <li className="skill-point">GraphQL</li>
                        <li className="skill-point">Bootstrap</li>
                        <li className="skill-point">REST APIs</li>
                        <li className="skill-point">Jest.js</li>
                    </ul>

                <h3 className="skill-section-title">Design Skills</h3>
                <ul className="skill-point-container">
                    <li className="skill-point">UX Research & Strategy</li>
                    <li className="skill-point">Prototyping</li>
                    <li className="skill-point">UI & UX Design</li>
                    <li className="skill-point">User-Centered Design</li>
                    <li className="skill-point">Wireframing</li>
                    <li className="skill-point">Information Architecture</li>
                    <li className="skill-point">Usability Testing</li>
                    <li className="skill-point">Responsive Design</li>
                    <li className="skill-point">Mockups</li>
                    <li className="skill-point">Interaction Design</li>
                    <li className="skill-point">Graphic Design</li>
                    <li className="skill-point">Image Editing</li>
                    <li className="skill-point">Web Content Accessibility Guidelines</li>
                </ul>


                <h3 className="skill-section-title">Tools</h3>
                    <ul className="skill-point-container">
                        <li className="skill-point">Figma</li>
                        <li className="skill-point">InVision</li>
                        <li className="skill-point">Sketch</li>
                        <li className="skill-point">Adobe XD & Photoshop</li>
                        <li className="skill-point">Miro</li>
                        <li className="skill-point">Canva</li>
                        <li className="skill-point">Contentful</li>
                        <li className="skill-point">Gatsby JS</li>
                        <li className="skill-point">Git</li>
                        <li className="skill-point">Vs Code</li>
                        <li className="skill-point">Jira</li>
                        <li className="skill-point">Content Mangement Systems</li>
                    </ul>

                <div class="experience-container">
                    <h3 className="section-title">Experience</h3>
                    <h4 className="small-title">Front-End Web Developer | President's Choice Financial</h4>
                    <p class="time">May 2022 - Present, Toronto, ON</p>
                    <ul class="description">
                        <li class="description-item">Implement websites, landing pages, and applications from concept through deployment, with a responsive, mobile-first approach.</li>
                        <li class="description-item">Adapted websites to match changing user preferences and client demands with regular updates.</li>
                        <li class="description-item">Worked with various teams and stakeholders to create and maintain digital experiences for multiple company products.</li>
                        <li class="description-item">Estimated project scope and participated in design discussions and code reviews.</li>
                        <li class="description-item">Engaged in quality assurance testing with an emphasis on troubleshooting production issues.</li>
                        <li class="description-item">Tools: React, SASS, HTML, Figma, Git.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;



