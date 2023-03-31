import React from "react";
import Recall from '../cards/recall';
import LessWaste from '../cards/less-waste';
import './project-work-page.scss';
import CmjLogo from "../cards/cmj-logo";

function Projects() {
    return (
           <div>
                <div class="projects-work-container">
                    <Recall />
                    <LessWaste />
                    <CmjLogo/>
                </div>
           </div>
    );
}

export default Projects;

