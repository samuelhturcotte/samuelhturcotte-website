import React from "react";
import Recall from '../cards/recall';
import LessWaste from '../cards/less-waste';
import './project-work-page.scss';

function Projects() {
    return (
           <div>
                <div class="projects-work-container">
                    <Recall />
                    <LessWaste />
                </div>
           </div>
    );
}

export default Projects;

