import React from 'react'
import "./Footer.css"
import logo from "../Assets/logo.png"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaSquareThreads, FaTiktok, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='mainFooter p-3'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} style={{ width: "120px" }} alt="" />
          </div>
          <div className="col-md-4 mt-3 mt-md-0 ">
            <div className='icons_contact'>


              <h3 className='fw-bold pop text-white '>Contact Us </h3>
              <li className='paraclr pop fw-semibold'> <MdEmail className='me-2' /> flawsomepsych@gmail.com</li>
              <li className='paraclr pop fw-semibold'> <FaPhoneAlt className='me-2' /> +923429713141</li>
              <li className='paraclr pop fw-semibold'> <FaLocationDot className='me-2' /> Pakistan&Kashmir </li>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <h3 className='fw-bold pop    text-white '>Follow US </h3>
            <div className="social_icons">


              <a href="https://www.linkedin.com/in/flawsome-psych-2b0028221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>

                <FaLinkedin />
              </a>
              <a href="https://www.threads.com/@flawsomepsych" target='_blank'>

                <FaSquareThreads />
              </a>
              <a href="https://www.instagram.com/flawsomepsych?igsh=NnU0a2Z1bHlmaXRy" target='_blank'>

                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/share/19xRiubGWN/">

                <FaFacebookF />
              </a>
              <a href="https://www.tiktok.com/@flawsomepsych?_t=ZS-8zTMS8xfxRs&_r=1" target='_blank'>

                <FaTiktok />
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
