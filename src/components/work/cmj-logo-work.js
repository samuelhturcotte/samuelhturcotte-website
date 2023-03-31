import './work.scss';
import React from "react";

function CmjLogoWork() {
    return (
        <div className="main-container">
           
               <div className="img-container">
                <img className="logo-img" src={require('../../assets/images/main-pictures/cmj-logo.png')} alt="recall" />
               </div>
               
    
            <div container="information-container" >
                <h3 className="work-title">Information</h3>
                <p className="information-text">This logo has been design for a cricut freelance artis.</p>

            </div>
        </div>
    );
}

export default CmjLogoWork;
