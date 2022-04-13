import React from 'react'
import '../Assets/css/Aboutus.css'
import img2 from '../Assets/images/img2.jpg'
function Aboutus() {
  return (
    <>
      <div className="About-us " id='About_Us'>
        <div className="about-us-image">
          <img src={img2} className="my-5" alt="logo" />
        </div>
        <div className="about-us-content col-md-6 col-sm-12 col-lg-5 ">
          <div className="">
            <p>ABOUT US</p>

            <h3 className="my-3">
              We are backed by a strong roster of strategic and leading
              investors
            </h3>

            <p>
              Founded in 2012, space has raises more than $110 milion, including
              recent our most funding round in 2018 led by Riverwood capital
            </p>
            <div className="">
              <p>
                Series-D -
                <span className="text-success font-weight-bold">
                  Space secures $50M Growth Investment From Riverwood Captial
                </span>
                <br></br>
                <h7>
                  For more information, see the{" "}
                  <span className="text-success font-weight-bold">
                    space profile{" "}
                  </span>
                </h7>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Aboutus