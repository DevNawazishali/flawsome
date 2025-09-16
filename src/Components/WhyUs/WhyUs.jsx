import React from 'react'
import "./WhyUs.css"
import Supervision from '../Supervision/Supervision'

export default function WhyUs() {
    return (
        <div className='WhyUs'>
            <div className="container">
                <h1 className='headclr fs-2 pop text-center fw-semibold'>
                    Our Services | FlawsomePsych Mental Health & Therapy in Pakistan
                </h1>
                <p className='paraclr pop  mt-3 text-center'>Services At FlawsomePsych, we provide professional mental health services in Pakistan designed to support individuals, couples, families, and professionals. Our goal is to create a safe, non-judgmental space where healing, growth, and self-discovery are possible.</p>
                <p className='paraclr pop  mt-3 text-center'>Whether you’re looking for therapy, psychological assessments, counseling, or professional training, we are here to guide you with evidence-based and compassionate care.</p>
                <div className="row my-3">
                    <div className="col-md-4">
                        <div className="whyusbox">
                            <h5 className='headclr text-center pop'> Psychological Assessments</h5>
                            <p className='paraclr pop text-center'>Our psychological assessment services help you gain clarity and direction by identifying emotional, cognitive, and behavioral patterns.</p>
                            <li className='text-dark text-start mb-1 pop'>✔️  Personality Assessments</li>
                            <li className='text-dark text-start mb-1 pop'> ✔️  Intelligence & Cognitive Functioning Tests</li>
                            <li className='text-dark text-start mb-1 pop'> ✔️  Emotional & Behavioral Assessments</li>
                            <li className='text-dark text-start mb-1 pop'> ✔️  Burnout Check & Stress Screening</li>
                            <li className='text-dark fw-bold  text-start mb-1 pop'>Charges:6000Pkr</li>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        <div className="whyusbox">
                            <h5 className='headclr text-center pop'>Psychotherapy & Counseling Services</h5>
                            <p className='paraclr pop text-center'>We provide confidential therapy and counseling in Pakistan tailored to your unique needs.</p>
                            <li className='text-dark text-start mb-1 pop'> ✔️ Individual Therapy: Manage anxiety, depression, trauma, and self-esteem challenges.  <br /> <span className='fw-bold'>
                                Charges:2500Pkr
                            </span></li>
                            <li className='text-dark text-start mb-1 pop'>✔️ Couple Therapy: Improve communication and build stronger relationships.  <br /> <span className='fw-bold'>
                                Charges:5500Pkr
                            </span></li>
                            <li className='text-dark text-start mb-1 pop'> ✔️ Family Therapy: Resolve conflicts and strengthen family dynamics.
                                <br /> <span className='fw-bold'>
                                    Charges:4000Pkr
                                </span> </li>
                            <li className='text-dark text-start mb-1 pop'> ✔️ Group Therapy: Share experiences and heal together in a supportive community.
                                <br /><span className='fw-bold'> charges:1200Pkr per head</span></li>
                            {/* <li className='text-dark fw-bold  text-start mb-1 pop'>Charges:6000Pkr</li> */}
                        </div>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        <div className="whyusbox">
                            <h5 className='headclr text-center pop'> Specialized Counseling Services</h5>
                            <p className='paraclr pop text-center'>Our expert team offers targeted counseling sessions to address specific needs:</p>
                            <li className='text-dark text-start mb-1 pop'> ✔️ Career Counseling: Explore your strengths, set career goals, and make confident decisions. 
                            <br /> <span className='fw-bold'>
                                Charges:2500Pkr
                            </span></li>
                            <li className='text-dark text-start mb-1 pop'> ✔️ Relationship Counseling: Build healthy connections and resolve relationship struggles.  <br /> <span className='fw-bold'>
                                Charges:2000Pkr
                            </span></li>
                            <li className='text-dark text-start mb-1 pop'> ✔️ Grief Counseling: Compassionate support through loss, heartbreak, and life transitions. <br />
                                <span className='fw-bold'>
                                    Charges:2000Pkr
                                </span> </li>

                        </div>
                    </div>
                </div>

                <Supervision/>
            </div>

        </div>
    )
}
