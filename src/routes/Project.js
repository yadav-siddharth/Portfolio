import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroproject from '../components/Heroproject'
import Work from '../components/Work'

const Project = () => {

  return (
    <div>
      <Navbar/>
      <Heroproject heading="PROJECTS." text="Browse my recent works"/>
      <Work/>
      <Footer/>
    </div>  
  )
}

export default Project

