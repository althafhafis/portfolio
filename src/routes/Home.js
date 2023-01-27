import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default Home