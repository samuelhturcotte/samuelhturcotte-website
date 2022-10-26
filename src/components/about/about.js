import './about.scss';
import React from "react";


function About() {
    return (
        <div className="container2">

            <img className="hellopic" src={require("../../assets/images/main-pictures/hello-dark-grey.png")} alt="recall" />

            <p className="about-text">
                My name is Samuel Turcotte, a detail-oriented junior UI/UX Designer who is a recent BrainStation UX Design graduate with a recreation management and banking industry background passionate about design, psychology, accessibility, and technology. <br /><br />

                As a hard-of-hearing individual, I strive to design accessible and inclusive products to maximize the chances of everyone properly using them regardless of ability, context, or situation, which is a win for users and companies.<br /><br />

                Learning UX Design at BrainStation was truly amazing because I had the chance to learn about the entire design process, the importance of developing human-centred products, and gaining experience using relevant industry tools such as Figma. I also had the chance to learn from and collaborate with people already in the industry, getting me ready for the job market.<br /><br />

                I am so excited to get started with my journey as a UI/UX Designer, and I cannot wait to continue growing my skill set and career over the coming years.
            </p>


        </div>
    );
}

export default About;



/*<h2>My Skills</h2>

          <h2>Web Development</h2>
          <p>HTML, CSS, SASS, React, Git, TypeScript, Javascript</p>


          <h2>UI/UX</h2>
          <p>Figma, InVision, Sketch, POP App,  Zeplin,
               Adobe XD, Miro, Canva, UX Research, Prototyping,  
                Agile, Design Sprints, User Interface, User Experience,
                User-Centered Design, Wireframing, Information Architecture, 
                Usability Testing,  Web Content Accessibility Guidelines</p>*/
