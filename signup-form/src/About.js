import React from 'react'
import notes from './images/notes.png'
import board from './images/board-stickynotes.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={board} />
                <div className='col-2'>
                    <h1>About</h1>
                    <span className='line'></span>
                    <p>Whether you're a college grad on the job hunt or a highschool grad looking to apply for colleges, Lifetrack is the right fit for you! It doesn't matter where you are in your journey, Lifetrack can help get you there! </p>
    
                </div>
            </div>
        </div>
    )
}

export default About