import React from 'react'
import Course from './Course'
import Main from './Main'
import AboutUs from './AboutUs'
import Achivement from './Achivement'
import Experienced from './Experienced'
import Footer from '../footer/Footer'
export default function Home() {
  return (
    <div className='home'>
      <Main />
      <Course />
      <AboutUs />
      <Achivement />
      <Experienced  />
      <Footer />
    </div>
  )
}
