import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import AboutUs from '../../Components/Aboutus/AboutUs'
import TeamStuf from '../../Components/Teams/TeamStuf'
import Testimonial from '../../Components/Testimonial/Testimonial'

function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
      <TeamStuf/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home
