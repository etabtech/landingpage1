import React from 'react'
import '../Assets/css/Aboutus.css'

function Contact() {
  return (
    <div id="contact" className="row d-flex justify-content-center mb-5">
        <div className="Get-in-touch col-md-5 p-5 ">
          <div className="text-center mb-5">
            <h2>Get in touch to know more</h2>
            <h5>
              Need help, have questions or want to suggest a feature? Send us a
              message here.
            </h5>
          </div>

          <div className="formm">
            <form>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className='col col-12'>
                  <textarea
                    className="form-control my-4"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Tell us more about detail"
                  ></textarea>
                </div>
                <div className='col col-12'>
                  <button type="button" className="btn btn-primary col-12">
                    Submit
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Contact