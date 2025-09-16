import React from 'react'
import "./Supervision.css"

export default function Supervision() {
    return (
        <div className='Supervision'>
            <div className="container">
                <hr style={{ color: "#7e00cd", height: "3px" }} />
                <h1 className='text-center mt-3 fw-bold headclr pop'>Supervision for Mental Health Professionals</h1>
                <p className='paraclr pop text-center mt-3 '>Looking for clinical supervision for social workers or mental health professionals? At FlawsomePsych, we specialize in supervision that supports your accreditation, CPD development, and professional well-being. Whether you need individual supervision, group sessions, or team-based reflection, we provide tailored guidance to match your needs.</p>
                <p className='paraclr pop text-center '>
                    Supervision with FlawsomePsych is more than a requirement—it’s a chance to reflect, recharge, and refine your practice. By working with experienced supervisors, you’ll gain valuable insights, stay aligned with professional standards, and grow with confidence in your mental health career.
                </p>

                <h3 className='text-center fw-bold headclr pop'>What we offer </h3>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="offers">
                            <h4 className='headclr fw-bold text-center'>Training</h4>
                            <li> ✔️ FlawsomePsych is committed to training the next generation of psychologists, counselors, and therapists</li>
                            <li> ✔️ Psychotherapy Training</li>
                            <li>✔️ Practical, skills-based programs for early-career professionals to build therapeutic confidence.</li>
                            <li> ✔️ Psychological Assessment Training</li>
                            <li> ✔️ Step-by-step guidance to conduct, score, and interpret psychological tests effectively</li>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                        <div className="offers">
                            <h4 className=' headclr fw-bold text-center'>Why Us</h4>
                            <li>✔️ Trusted Mental Health Experts in Pakistan</li>
                            <li>✔️ Evidence-Based & Holistic Therapies</li>
                            <li>✔️ Safe, Inclusive & Confidential Care</li>
                            <li>✔️ Professional Growth & Skill Development</li>

                        </div>
                    </div>
                </div>

                <p className='paraclr pop text-center mt-4'>At FlawsomePsych, we believe every flaw is part of your story — and every story has the power to heal</p>
                <div className='d-flex justify-content-center '>
                    <button className='appointment'> Book a Session</button>
                </div>

            </div>

        </div>
    )
}
