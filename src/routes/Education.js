import React from 'react'
import Academic from '../components/Academic'
import Footer from '../components/Footer'
import Heroproject from '../components/Heroproject'
import Navbar from '../components/Navbar'

const Education = () => {
  return (
    <div>
          <Navbar/>
          <Heroproject heading="EDUCATION." text="Have look at my Academic"/>
          <Academic/>
          <hr></hr>
          <Footer/>
      
    </div>
  )
}

export default Education
