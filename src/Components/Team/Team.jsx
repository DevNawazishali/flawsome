import React from 'react'
import "./Team.css"

import jav from "../Assets/Javeria.png"
import uoj from "../Assets/urooj.png"
import tob from "../Assets/toba.png"
import mk from "../Assets/Mk.png"
import am from "../Assets/am.png"
import mz from "../Assets/mz.png"
import ma from "../Assets/ma.png"
import mn from "../Assets/mn.png"
import hk from "../Assets/hk.png"


export default function Team() {
    return (
        <div className='Team'>
            <div className="container">
                <h1 className='headclr pop text-center fw-semibold'>Our Trusted Psychologist’s</h1>
                {/* <p className='paraxlr text-center'>Meet our team of Experienced Psychologists in Islamabad, committed to exceptional client care and support:</p> */}

                <div className="row align-items-center justify-content-center  mt-4 ">
                    <div className="col-md-10">
                        <div className="teambox">
                            <div className="row ">
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center '>
                                        <img src={jav} className='teamimg' alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='teamcontent p-3 mt-3 text-center '>
                                        <h5 className='name text-dark fw-semibold pop mb-0 '>Javeria Rafique</h5>
                                        <span className='paraclr pop'>Clinical Psychologist</span>
                                        <p className='about paraclr pop '>Javeria Rafique is a Clinical Psychologist with a BS in Clinical Psychology (UMT) and an ADCP from GCU, Lahore. She specializes in treating depression, anxiety, stress, trauma, mood, and neurodevelopmental disorders, working with both adolescents and adults. Using evidence-based approaches like CBT, REBT, and family therapy, she provides a safe, empathetic, and client-centered space for emotional healing.
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-10 mt-3 ">
                        <div className="teambox ">
                            <div className="row ">
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center '>
                                        <img src={uoj} className='teamimg' alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='teamcontent p-3 mt-3 text-center '>
                                        <h5 className='name text-dark fw-semibold pop mb-0 '>Urooj Javed</h5>
                                        <span className='paraclr pop'> Assistant Psychologist</span>
                                        <p className='about paraclr pop '>Urooj Javed, with a Master’s in Clinical Psychology from UPR, has experience as an Assistant Psychologist at Gujranwala Medical College and advanced training in CBT and psychotherapy. She specializes in anxiety, depression, PTSD, ADHD, OCD, and anger management, offering evidence-based assessment and intervention. Passionate about emotional well-being, she provides both in-person and online therapy to make psychological care more accessible.

                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-10 mt-3">
                        <div className="teambox">
                            <div className="row  ">
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center '>
                                        <img src={tob} className='teamimg' alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='teamcontent p-3 mt-3 text-center '>
                                        <h5 className='name text-dark fw-semibold pop mb-0 '>Tooba Asif</h5>
                                        <span className='paraclr pop'> Clinical Psychologist</span>
                                        <p className='about paraclr pop '>Tooba Asif, a Clinical Psychologist with a BS from UMT, has experience working at LGSI with children with special needs, Jinnah Hospital, HopeHeal, and Marham, alongside case management at Jackson Park Hospital. Certified in CBT, DBT, and Trauma-Informed Interventions, she provides therapy for anxiety, depression, OCD, trauma, ADHD, ASD, and learning disabilities. Passionate about youth mental health, she offers in-person, online, and home-based sessions with a focus on emotional well-being.


                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-10 mt-3 ">
                        <div className="teambox">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center '>
                                        <img src={mk} className='teamimg' alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='teamcontent p-3 mt-3 text-center '>
                                        <h5 className='name text-dark fw-semibold pop mb-0 '>Mujahid Khan </h5>
                                        <span className='paraclr pop'> Clinical Psychologist</span>
                                        <p className='about paraclr pop '>Mujahid Khan is a Career Counselor and Clinical Psychologist with 5+ years of experience in mental health, career coaching, and MHPSS leadership. He empowers individuals through career counseling, resilience training, and stress management, having trained 350+ professionals and launched a 24/7 support helpline impacting 500+ users.



                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-10 mt-3 ">
                        <div className="teambox">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center teamimgbg '>
                                        <img src={am} className='teamimg' alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='teamcontent p-3 mt-3 text-center '>
                                        <h5 className='name text-dark fw-semibold pop mb-0 '>Ayesha Mazhar </h5>
                                        <span className='paraclr pop'> Psychologist</span>
                                        <p className='about paraclr pop '>Ayesha Mazhar is a psychologist in Pakistan with experience in clinical, hospital, and community mental health. Skilled in CBT, DBT, REBT, and supportive counseling, she treats depression, anxiety, OCD, and more, while promoting resilience and psychological well-being through a client-centered approach.



                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-10 mt-3 ">
                        <div className="teambox">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center teamimgbg '>
                                        <img src={mz} className='teamimg' alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='teamcontent p-3 mt-3 text-center '>
                                        <h5 className='name text-dark fw-semibold pop mb-0 '>Mahnoor Zafar </h5>
                                        <span className='paraclr pop'> Psychologist</span>
                                        <p className='about paraclr pop '>Mahnoor Zafar is a psychology graduate with experience supporting children, adolescents, and young adults in emotional regulation, behavioral support, and personal grow align-items-centerth. She is passionate about promoting mental health awareness and creating safe, client-centered spaces that empower youth to overcome challenges.



                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-10 mt-3 ">
                        <div className="teambox">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center teamimgbg '>
                                        <img src={ma} className='teamimg' alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='teamcontent p-3 mt-3 text-center '>
                                        <h5 className='name text-dark fw-semibold pop mb-0 '>Muhammad Aqib </h5>
                                        <span className='paraclr pop'>Clinical Psychologist</span>
                                        <p className='about paraclr pop '>Muhammad Aqib is a Clinical Psychologist with a Master’s in Clinical Psychology and experience in rehabilitation centers, hospitals, and schools. Skilled in CBT, ACT, trauma-informed therapy, and ABA, he supports children, adolescents, and adults in managing stress, anxiety, depression, trauma, and relationship challenges.




                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-10 mt-3 ">
                        <div className="teambox">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center teamimgbg '>
                                        <img src={mn} className='teamimg' alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='teamcontent p-3 mt-3 text-center '>
                                        <h5 className='name text-dark fw-semibold pop mb-0 '>Syed M. Mehdi Naqvi</h5>
                                        <span className='paraclr pop'>Clinical Psychologist</span>
                                        <p className='about paraclr pop '>Syed M. Mehdi Naqvi is a Clinical Psychologist, Trainer, and Facilitator with 8+ years of experience in child psychology, emotional intelligence, and relationship counseling. He has led workshops with UNICEF, schools, and NGOs, empowering individuals and families through programs on parenting, resilience, and personal grow align-items-centerth.





                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-10 mt-3 ">
                        <div className="teambox">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center teamimgbg '>
                                        <img src={hk} className='teamimg' alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='teamcontent p-3 mt-3 text-center '>
                                        <h5 className='name text-dark fw-semibold pop mb-0 '>Hafsa Khalid Awan</h5>
                                        <span className='paraclr pop'>Clinical Psychologist</span>
                                        <p className='about paraclr pop '>Hafsa Khalid Awan is a Clinical Psychologist with an MS in Clinical Psychology from Riphah International University. With experience in assessments, counseling, rehabilitation, child and adolescent psychology, and addiction management, she is dedicated to promoting mental health awareness and providing compassionate support.






                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
