import React from 'react'
import "./FlawVoices.css"
import ali from "../Assets/ali.jpg"
import aa from "../Assets/aa.jpg"
import sa from "../Assets/sa.jpg"
// import e from "../Assets/e.jpg"
import e1 from "../Assets/e1.jpg"
import e from "../Assets/e.jpg"
import hk from "../Assets/hk.jpg"
import uoj from "../Assets/urooj.png"
import ceo from "../Assets/CEO.png"



export default function FlawVoices() {
    return (
        <div className='FlawVoices'>
            <div className="container">
                {/* <hr style={{ color: "#7e00cd", height: "3px" }} /> */}

                <div className="row my-4 justify-content-center">
                    <div className="col-md-11">
                        <h1 className='text-center fw-bold headclr mt-3 pop'>FlawsomeVoices – Stories That Inspire Healing</h1>
                        <p className='paraclr pop text-center mt-3 '>At FlawsomePsych, we believe that every voice matters. FlawsomeVoices is our dedicated platform where individuals share their real stories of resilience, healing, and growth. From overcoming depression and anxiety to navigating trauma, relationships, and self-discovery, these voices create a safe space for connection and inspiration.</p>
                        <h4 className='text-center headclr fw-semibold'>
                            What is FlawsomeVoices?
                        </h4>
                        <p className='text-center paraclr pop'>FlawsomeVoices is more than just a blog or podcast series—it’s a mental health storytelling community. Here, you will find:</p>
                        <p className='text-center paraclr pop'>✨<span className='fw-bold headclr'> Personal Journeys:</span> Real experiences of people managing stress, anxiety, self-esteem, grief, and more.</p>


                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-md-4">
                        <img src={ali} className='w-100 rounded' alt="" />
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        <img src={aa} className='w-100 rounded' alt="" />
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        <img src={sa} className='w-100 rounded' alt="" />
                    </div>
                </div>
                <p className='text-center paraclr pop mt-5  '><span className='fw-bold headclr '> ✨ Expert Insights:</span>  Psychologists and therapists sharing professional guidance on emotional well-being.</p>
                <div className="row my-4">
                    <div className="col-md-4">
                        {/* <img src={e} className='w-100 rounded' alt="" /> */}
                        <div className='experInside'>
                            <p className='pop headclr '>"Healing is not linear.Some days will be tough,but every step counts.Therapy provides the tool  to keep moving  forward. "</p>
                            <div>
                                <img src={hk} className='thImg' alt="" />
                                <span className='ms-2 fw-bold'>Hafsa Khalid Awan</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        {/* <img src={e} className='w-100 rounded' alt="" /> */}
                        <div className='experInside'>
                            <p className='pop headclr '>“Parents often underestimate the role of emotional intelligence in children. Positive parenting and empathy are key to raising resilient kids.
                                Parenting Expert, FlawsomePsych”</p>
                            <div>
                                <img src={uoj} className='thImg' alt="" />
                                <span className='ms-2 fw-bold'>Urooj Javed</span>
                            </div>
                            {/* <img src={e} alt="" /> */}

                        </div>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        {/* <img src={e} className='w-100 rounded' alt="" /> */}
                        <div className='experInside'>
                            <p className='pop headclr '>“Mental health stigma is still a challenge in Pakistan, but every success story proves that seeking help is a sign of strength, not weakness.
                                Mental Health Advocate, FlawsomePsych”</p>
                            <div>
                                <img src={ceo} className='thImg' alt="" />
                                <span className='ms-2 fw-bold'>Syeda Mehak Fatima</span>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
