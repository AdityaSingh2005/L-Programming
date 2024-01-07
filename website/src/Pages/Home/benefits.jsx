// Benefits.js

import React from 'react';
import './css/benefits.css';

const Benefits = () => {
  return (
    <section id="skills">
    <span className="skillTitle">Benefits</span>
    <span className="skillDesc">Empower your journey in tech and computer science with our comprehensive courses and notes, unlocking a world of knowledge and opportunities.</span>
    <div className="skillBars">
        <div className="skillBar">
            <img src='project.png' alt="UI/UX Design" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>Industry-Level Projects</h2>
                <p> Immerse yourself in hands-on learning with our industry-relevant projects, where theory meets real-world application, ensuring you gain practical skills for success in the tech industry.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src="notes.png" alt="Web Design" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>Expert-Crafted Content</h2>
                <p>Wealth of knowledge curated by industry experts, as our expert-crafted content empowers you with in-depth insights and cutting-edge information in the dynamic field of technology.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src="mentor.png" alt="App Design" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>Expert Guidance</h2>
                <p>Receive personalized guidance from professionals, guiding you through your learning journey and providing expert insights.</p>
            </div>
        </div>
    </div>
</section>
  );
};

export default Benefits;
