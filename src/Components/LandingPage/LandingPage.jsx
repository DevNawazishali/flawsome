import React from 'react'
import "./LandingPage.css"
import { Typewriter } from 'react-simple-typewriter'

export default function LandingPage() {
    return (
        <div className='LandingPage'>
            <div className="overlay"></div>
            <div className="container">
                <div className='position-relative z-2'>

                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className='landingheading text-center text-white  fw-bold pop'>
                                Welcome to Flawsome
                                <br />
                                <span style={{ color: "#9F00FF" }}>
                                    <Typewriter
                                        words={[
                                            '“Embracing Flaws, Celebrating Growth”',
                                            'Your trusted space for therapy, psychoanalysis, supervision, and mental health awareness in Pakistan, where psychology meets compassion',
                                            'Book a therapy session',
                                            // 'Because your mind matters.',
                                            // 'Embrace your true self.',
                                            // 'You are not alone.'
                                        ]}
                                        loop={Infinity}  // Always keep looping
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h1>

                            <p className='pop text-center landindtext '>A dedicated place for online and in-person counseling and therapy sessions in Islamabad, where our Certified psychologists</p>
                            <div className='d-flex justify-content-center'>

                                <button className=' appointment mt-5'> Appointment</button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}
