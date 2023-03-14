import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroproject from '../components/Heroproject'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Heroproject heading="ABOUT MYSELF." text="Explore my Ups and Down" />
        <Footer/>
    </div>
  )
}

export default About
