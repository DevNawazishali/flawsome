import React from 'react'
import "./Appoinment.css"

export default function Appoinment() {
    return (
        <div className='Appoinment'>
            <div className="container">
            {/* <hr style={{ color: "#7e00cd", height: "3px" }} /> */}

                <h1 className='headclr mt-4  pop text-center fw-bold'>BOOK YOUR APPOINTMENT</h1>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <div className="teambox  p-4 h-auto">
                            <p className='paraclr text-center pop'>Please share your Information below to Initiate appointment process</p>
                            <div className="appointment_content">
                                <label className='appointmentLabel pop' htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="appointmentInput"
                                    id="name"
                                    name="name"
                                />

                                <label className='appointmentLabel mt-3 pop' htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="appointmentInput"
                                    id="email"
                                    name="email"
                                />
                                <label className='appointmentLabel mt-3 pop' htmlFor="Phone Number">Phone Number:</label>
                                <input
                                    type="number"
                                    placeholder="Enter Your Phone Number"
                                    className="appointmentInput"
                                    id="Phone Number"
                                    name="Phone Number"
                                />

                                <div className="row">
                                    <div className="col-md-6">
                                        <div>

                                            <label className='appointmentLabel mt-3 pop' htmlFor="Age">Age:</label>
                                            <input
                                                type="number"
                                                placeholder="Enter Your Age"
                                                className="appointmentInput"
                                                id="Age"
                                                name="Age"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <label className='appointmentLabel mt-3 pop' htmlFor="gender">Gender:</label>
                                            <select
                                                id="gender"
                                                name="gender"
                                                className="appointmentInput w-100"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <label className='appointmentLabel mt-3 pop' htmlFor="City Name">City Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your City Name"
                                    className="appointmentInput"
                                    id="City Name"
                                    name="City Name"
                                />

<div className="appointment_content">

{/* Mental Health Problems */}
<label className="appointmentLabel pop mb-2 mt-4 fw-bold d-block">
  What are the most common mental health problems for you, and what are the current symptoms? <span className="text-danger">*</span>
</label>

<div className="row">
  <div className="col-md-6">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="anxiety" value="anxiety" />
      <label className="form-check-label pop paraclr" htmlFor="anxiety">Anxiety</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="abuse" value="abuse" />
      <label className="form-check-label pop paraclr" htmlFor="abuse">Abuse</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="depression" value="depression" />
      <label className="form-check-label pop paraclr" htmlFor="depression">Depression/Low mood</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="suicidal" value="suicidal" />
      <label className="form-check-label pop paraclr" htmlFor="suicidal">Thoughts about suicide</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="unable_enjoy" value="unable_enjoy" />
      <label className="form-check-label pop paraclr" htmlFor="unable_enjoy">Unable to enjoy activities</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="self_harm" value="self_harm" />
      <label className="form-check-label pop paraclr" htmlFor="self_harm">Self harm</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="relationships" value="relationships" />
      <label className="form-check-label pop paraclr" htmlFor="relationships">Relationships & Marriage Problems</label>
    </div>
  </div>

  <div className="col-md-6">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="addiction" value="addiction" />
      <label className="form-check-label pop paraclr" htmlFor="addiction">Addiction</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="stress" value="stress" />
      <label className="form-check-label pop paraclr" htmlFor="stress">Stress</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="loneliness" value="loneliness" />
      <label className="form-check-label pop paraclr" htmlFor="loneliness">Loneliness</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="loss_interest" value="loss_interest" />
      <label className="form-check-label pop paraclr" htmlFor="loss_interest">Loss of interest</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="violence" value="violence" />
      <label className="form-check-label pop paraclr" htmlFor="violence">Violence/Fighting at home</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="career" value="career" />
      <label className="form-check-label pop paraclr" htmlFor="career">Career Issues</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="others" value="others" />
      <label className="form-check-label pop paraclr" htmlFor="others">Others</label>
    </div>
  </div>
</div>

{/* Condition */}
<div className="mt-4">
  <label className="appointmentLabel pop mb-2 fw-bold d-block">
    Condition: <span className="text-danger">*</span>
  </label>

  <div className="form-check">
    <input className="form-check-input" type="radio" name="condition" id="mild" value="mild" />
    <label className="form-check-label pop paraclr" htmlFor="mild">Mild</label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="condition" id="moderate" value="moderate" />
    <label className="form-check-label pop paraclr" htmlFor="moderate">Moderate</label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="condition" id="severe" value="severe" />
    <label className="form-check-label pop paraclr" htmlFor="severe">Severe</label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="condition" id="urgent" value="urgent" />
    <label className="form-check-label pop paraclr" htmlFor="urgent">Urgent Referral Required</label>
  </div>
</div>
</div>


<label htmlFor="des" className='appointmentLabel'>Issue/concern (briefly describe problem), which you are seeking help?</label>
<textarea name="des" className='appointmentInput' id="des" htmlFor="des" cols="30" rows="7"></textarea>
<button className=' appointment w-100 mt-4 '> Book An Appointment</button>






                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
