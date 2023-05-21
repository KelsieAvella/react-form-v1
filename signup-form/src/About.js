import React from 'react'
import notes from './images/notes.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={notes} alt='john' />
                <div className='col-2'>
                    <h1>About</h1>
                    <span className='line'></span>
                    <p>Whether you're a college grad looking for a career or a highschool grad looking for colleges, Lifetrack is the right fit for you! </p>
    
                </div>
            </div>
        </div>
    )
}

export default About