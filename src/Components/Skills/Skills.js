import React from 'react';
import './Skills.css'
import AppDesign from '../../assets/app-design.png';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">As an aspiring Front-End Developer, I am enthusiastic about creating visually appealing and user-friendly websites with a solid foundation in HTML-5, CSS-3, JavaScript, and React JS, My goal is to leverage my skills to enhance user satisfaction and make a positive impact in the world of web development</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src= { UIDesign } alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>
                        UI/UX Design
                    </h2>
                    <p>
                        Creating intuitive and visually appealing digital interfaces that prioritize user experience
                    </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={ WebDesign } alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>
                        Website Design
                    </h2>
                    <p>
                        Designs and crafts the visual elements and layout of websites for aesthetic and user-friendly presentation                        
                    </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={ AppDesign } alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>
                       App Design
                    </h2>
                    <p>
                        Creating the visual and interactive elements of mobile or desktop applications to ensure an engaging user experience                       
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
