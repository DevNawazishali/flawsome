import React from 'react'
import b from "../Assets/blog1.png"
import b2 from "../Assets/blog2.png"
import b3 from "../Assets/blog3.png"
import "./Blog.css"
import {Link} from "react-router-dom"

export default function Blog() {
  return (
    <div className='Blog'>
      <div className="container">
        {/* <hr style={{ color: "#7e00cd", height: "3px" }} /> */}

        <h1 className='text-center headclr fw-bold pop'>Blogs & Insights  FlawsomePsych</h1>
        <div className="row my-4">
          <div className="col-md-4">
            <div className="blogs teambox pe-0 h-auto">
              <div>
                <img src={b} className='blog_img ' alt="" />
              </div>
              <div className='p-3'>

                <h6 className='text-center fw-bold '>Narcissism Explained: How to Spot It, Protect Yourself, and Heal</h6>
                <p className='paraclr pop text-center '>Imagine this: you meet someone who seems charming, confident, even magnetic. They shower you with compliments, tell you you’re “different from anyone else,” and make you feel special. But weeks later, ..</p>
                <div className='d-flex justify-content-center'>

              <Link className="text-decoration-none " to="/Blog_1">

                  <button className='appointment'>Read More </button>
              </Link>
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="blogs teambox pe-0 h-auto">
              <div>
                <img src={b2} className='blog_img ' alt="" />
              </div>
              <div className='p-3'>

                <h6 className='text-center fw-bold '>The Science of Overthinking: Why Your Brain Won’t Switch Off</h6>
                <p className='paraclr pop text-center '>It’s 2 a.m. and you’re wide awake. You replay that awkward thing you said at work, wondering if your colleague thinks you’re weird. Then your mind leaps ahead: What if I mess up the presentation tomorrow? ..</p>
                <div className='d-flex justify-content-center'>

                <Link className="text-decoration-none " to="/Blog_2">

                  <button className='appointment'>Read More </button>
              </Link>
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="blogs teambox pe-0 h-auto">
              <div>
                <img src={b3} className='blog_img ' alt="" />
              </div>
              <div className='p-3'>

                <h6 className='text-center fw-bold '>Why Therapy Isn’t Just for “Broken” People</h6>
                <p className='paraclr pop text-center '>You’ve probably heard it before: “Therapy is for people who are broken.” Or maybe you’ve even thought it yourself. The idea that only people in crisis, battling depression, or “on the verge of a breakdown”, ..</p>
                <div className='d-flex justify-content-center'>

                <Link className="text-decoration-none " to="/Blog_3">

<button className='appointment'>Read More </button>
</Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
