import React from 'react'

function About() {
    return (
    <div>
        <div className="about">
            <div className="about-text">
                <h1>What is LifeTrack?</h1>
                <p>This is what LifeTrack is about.</p>
            </div>
            <div className="about-img">
                <img src="./imgs/goal_life.jpg" />
            </div> 
        </div>
        <div className="about">
            <div className="about-img">
                <img src="./imgs/goal_life.jpg" />
            </div>
            <div className="about-text">
                <h1>How Does it Work?</h1>
                <p>This is what LifeTrack works.</p>
            </div>
        </div>
    </div>
    )
}

export default About;