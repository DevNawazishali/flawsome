import React from 'react'
import st from "../Assets/story.jpg"

export default function Story() {
    return (
        <div className='Story'>
            <div className="container">
            {/* <hr style={{ color: "#7e00cd", height: "3px" }} /> */}

                <h1 className='text-center fw-bold headclr pop'>The Story Garden – FlawsomePsych</h1>
                <div className="container">
                <div className="row mt-4 justify-content-center ">
                <div className="col-md-6">
                        <img src={st} className='storyImg' alt="" />
                    </div>

                </div>
<div className='d-flex justify-content-center mt-4'>

                <button className='appointment '>Order Now</button>
</div>
                   
                </div>
            </div>

        </div>
    )
}
