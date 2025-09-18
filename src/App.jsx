import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import AboutUs from './Components/AboutUs/AboutUs';
import WhyUs from './Components/WhyUs/WhyUs';
import Team from './Components/Team/Team';
import Appoinment from './Components/Appoinment/Appoinment';
import Footer from './Components/Footer/Footer';
import Founder from './Components/Founder/Founder';
import Supervision from './Components/Supervision/Supervision';
import Blog from './Components/Blog/Blog';
import Story from './Components/Story/Story';
import FlawVoices from './Components/FlawVoices/FlawVoices';
import Resources from './Components/Resources/Resources';
import Testimonials from './Components/Testimonials/Testimonials';
import JoinUs from './Components/JoinUs/JoinUs';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Blog_1 from './Components/Blog/Blog_1';
import Blog_2 from './Components/Blog/Blog_2';
import Blog_3 from './Components/Blog/Blog_3';

function App() {


  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/story" element={<Story />} />
        <Route path="/FlawVoices" element={<FlawVoices />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<WhyUs />} />
        <Route path="/Testinomials" element={<Testimonials />} />
        <Route path="/Blog_1" element={<Blog_1 />} />
        <Route path="/Blog_2" element={<Blog_2 />} />
        <Route path="/Blog_3" element={<Blog_3 />} />
        <Route path="/Appointment" element={<Appoinment />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
   
   
    <Footer/> 
    </>
  )
}

export default App
