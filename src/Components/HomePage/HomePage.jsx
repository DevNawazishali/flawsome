import React from 'react'
import LandingPage from '../LandingPage/LandingPage'
import JoinUs from '../JoinUs/JoinUs'
import Appoinment from '../Appoinment/Appoinment'
import Testimonials from '../Testimonials/Testimonials'
import Resources from '../Resources/Resources'
import FlawVoices from '../FlawVoices/FlawVoices'
import Founder from '../Founder/Founder'
import WhyUs from '../WhyUs/WhyUs'
import Supervision from '../Supervision/Supervision'
import Blog from '../Blog/Blog'

export default function HomePage() {
  return (
    <div className=''>
    <LandingPage/>
     <Founder/>
    
    {/* <WhyUs/> */}
    <Supervision/>
    
    {/* <Blog/> */}
   
    {/* <FlawVoices/> */}
    {/* <Resources/> */}
    <Testimonials/>
    <Appoinment/>
    <JoinUs/>
      
    </div>
  )
}
