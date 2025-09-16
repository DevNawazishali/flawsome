import React from 'react'
import ceo from "../Assets/CEO.png"

export default function Founder() {
  return (
    <div className='founder'>
      <div className="container">
        <h1 className='headclr pop text-center fw-bold'>Founder | Clinical Psychologist</h1>
        <p className='text-dark text-center  fw-bold '>(Syeda Mehak Fatima)</p>
        <div className="row justify-content-center ">
          <div className="col-md-10">
            <div className="teambox  d-flex  h-auto ">
              <div className="row align-items-center ">
                <div className="col-md-6">
                  <div className='d-flex justify-content-center align-items-center '>
                    <img src={ceo} className='teamimg' alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                <div className='p-3'>

                  <p className='pop text-dark text-center  mt-4'>Syeda Mehak Fatima is the Founder of FlawsomePsych, a platform dedicated to promoting psychological resilience and personal growth. She is a Clinical Psychologist with an MS in Clinical Psychology, along with specialized training through an Advanced Diploma in Cognitive Behavioural Therapy (CBT) and a Diploma in Mental Health. She is a member of the American Psychological Association (APA) and the Psychoanalysis Society of Pakistan, and an alumna of the Academy for Women Entrepreneurs (AWE) program supported by the U.S. Embassy. With broad clinical experience addressing mood and anxiety disorders, trauma, addiction, ADHD, and Autism Spectrum Disorder, she offers therapy for individuals, couples, and families using an integrative and culturally sensitive approach.</p>
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
