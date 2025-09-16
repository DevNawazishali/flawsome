import React from 'react'
import "./AboutUs.css"
import { FaUser, FaHeart, FaUsers } from "react-icons/fa";

// import { FaUser } from "react-icons/fa6";
// import { FaHeart } from "react-icons/fa6";
// import { FaUsers } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import about from "../Assets/about.png"
export default function AboutUs() {
    return (
        <div className='AboutUs'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h1 className='text-center pop fw-semibold headclr'>About Us | FlawsomePsych</h1>
                        <p className='text-center paraclr '>At FlawsomePsych, we believe mental health is not about being perfect it’s about embracing your flaws and turning them into strengths. Our name reflects our core philosophy: you are “Flawsome” flawed yet absolutely awesome.</p>
                        <h1 className='text-center pop fw-semibold headclr mt-4'>Our Mission</h1>
                        <p className='text-center paraclr '>Our mission is to create a safe space where individuals can explore their emotions, heal from their struggles, and rediscover their true potential. We aim to combine clinical expertise with creativity from therapy sessions to storytelling, workshops, and expressive art projects to ensure mental health care feels approachable and relatable.</p>

                    </div>
                </div>
                <h1 className='headclr fw-bold text-center '>What Makes Us Different</h1>

                <div className="row my-5">
                    <div className="col-md-3">
                        <div className='d-flex align-items-center gap-3'>

                            <div className="iconbox"><FaUser /></div>
                            <div>
                                <h6 className='pop fw-bold headclr'>Holistic Approach: </h6>
                                <p className='pop paraclr'>We blend evidence-based psychology with creative and narrative practices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3 mt-md-0">
                        <div className='d-flex align-items-center gap-3'>

                            <div className="iconbox"><FaUsers /></div>
                            <div>
                                <h6 className='pop fw-bold headclr'>Creative Storytelling</h6>
                                <p className='pop paraclr'>We design workshops, stories, and resources that help people connect with their inner world in meaningful ways.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3 mt-md-0">
                        <div className='d-flex align-items-center gap-3'>

                            <div className="iconbox"><FaHeart /></div>
                            <div>
                                <h6 className='pop fw-bold headclr'>Community-Centered</h6>
                                <p className='pop paraclr'>•	Our work extends beyond therapy rooms, fostering awareness through social media, podcasts, seminars, and collaborations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3 mt-md-0">
                        <div className='d-flex align-items-center gap-3'>

                            <div className="iconbox"><FaHome /></div>
                            <div>
                                <h6 className='pop fw-bold headclr'>Inclusive & Safe</h6>
                                <p className='pop paraclr'>Every individual, regardless of background, is welcomed and supported.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <img src={about} className='w-100  rounded' alt="" />
                    </div>
                    <div className="col-md-7 mt-4 mt-md-0">
                        <h3 className=' mt-4 pop fw-semibold headclr'>Who We Are</h3>
                        <p className=' paraclr '>FlawsomePsych is a growing mental health organization dedicated to psychological wellness, therapy, and community support. Founded by passionate mental health professionals, we are committed to breaking the stigma around therapy and making mental health resources accessible, inclusive, and empowering for everyone.</p>

                        <h3 className='headclr headclr pop fw-bold '>Our Vision</h3>
                        <p className='paraclr pop'>•	We envision a future where mental health is celebrated as much as physical health. Through therapy, education, and awareness campaigns, FlawsomePsych strives to empower individuals, families, and communities to embrace their journey flaws and all.</p>
                        <button className=' appointment mt-3'> About Us</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
