import './Hero.css';
import '../index.css';
import Introimg from '../assets/background.jpg';
import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
          <div className='mask'>
                    <img className='into-img' src={Introimg} alt="Introimg" />
          </div>

          <div className='content' >
                    <p>HI, I'M A GRADUATE STUDENT </p> 
                    <h1>SIDDHARTH YADAV.</h1>
                    <div className='button'>
                              <Link to='/project' className='btn'>Projects</Link> 
                              <Link to='/education' className='btn btn-light'>Education</Link>                   
                    </div>
          </div>   
    </div>
  )
}

export default Hero
