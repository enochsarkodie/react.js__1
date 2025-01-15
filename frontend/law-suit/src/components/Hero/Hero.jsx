import React from 'react';
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () =>{
    return (
        <div className='hero container'>
         <div  className='hero-text'>
            <h1>Our commitment to our clients extends beyond the courtroom and chambers</h1>
            <p>
            We are passionate in advocating for our clients' rights and
             are dedicated to delivering personalized legal solutions that address 
             your individual needs
            </p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=""></img></button>
         </div>
        </div>
    )
}

export default Hero;