import React from 'react'
import "./Testimonials.css"
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import { Autoplay } from 'swiper/modules';

export default function Testimonials() {
    return (
        <div className='Testimonials' id='Testimonials'>
            <div className="container">
            <hr style={{ color: "#7e00cd", height: "3px" }} />

                <h1 className='text-center fw-bold mt-4 headclr'>Testimonials  </h1>
                <>
                    <Swiper
                        slidesPerView={1}
                        
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        loop="true"
                        modules={[Autoplay]}
                        className="mySwiper mt-5"
                    >
                        <SwiperSlide>
                            <div className="testimonicals">
                                <span className='fw-bold headclr '>Ayesha Khan – Lahore</span>
                                <p className='paraclr text-center pop mt-3 '>"FlawsomePsych provided me with professional mental health support in Lahore when I was struggling with anxiety. Their therapy sessions gave me the tools to manage stress and rebuild my confidence. I highly recommend their counseling services in Pakistan."</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonicals">
                                <span className='fw-bold headclr '>Ali Raza – Karachi</span>
                                <p className='paraclr text-center pop mt-3 '>"I joined FlawsomePsych during a very difficult phase of my life. Their counseling sessions in Karachi helped me overcome self-doubt and focus on my personal growth. The therapists are skilled, compassionate, and truly care about emotional well-being."</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonicals">
                                <span className='fw-bold headclr '>Fatima Zahra – Islamabad</span>
                                <p className='paraclr text-center pop mt-3 '>"The therapy sessions at FlawsomePsych were life-changing. I learned how to regulate my emotions, manage stress, and strengthen my relationships. It’s the best mental health support platform I’ve found in Pakistan."</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonicals">
                                <span className='fw-bold headclr '>Usman Sheikh – Rawalpindi</span>
                                <p className='paraclr text-center pop mt-3 '>"FlawsomePsych gave me a safe and non-judgmental space to share my struggles. Their clinical psychologists in Rawalpindi guided me with practical tools that improved my mental health and overall well-being."</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonicals">
                                <span className='fw-bold headclr '>Sana Malik – Faisalabad</span>
                                <p className='paraclr text-center pop mt-3 '>"Through FlawsomePsych’s counseling services, I gained hope and clarity. Their resources on emotional wellness and therapy sessions made mental health support accessible and effective in Pakistan."</p>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </>
            </div>

        </div>
    )
}
