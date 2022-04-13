import React from 'react'
import thirdsectionImg from '../Assets/images/third_sectionimg.png'
import hint_icon from '../Assets/images/hint_icon.svg'
import group_icon from '../Assets/images/group_icon.svg'
import '../Assets/css/Third.css'

function Third() {
    return (
        <div className='container m-auto section_3' id='Testrimonials' >
            <div className='row row-cols-lg-2 ms-5 row-cols-md-1 row-cols-sm-1 ms-3 inner_row_container'>
                <div className='inner_banner_1 col-12 my-5 col-lg-6 col-md-10 col-sm-10'>
                    <p className='seeMore'>SEE HOW WE ARE</p>
                    <h3>Working to make this possible</h3>
                    <p className='about mb-4 mt-3'>We are team of young and aspiring designers and engineers working to make some real impact.</p>
                    <div className='row mt-5 banner_inner_text_1'>
                        <div className='col-1 container_1_text'>
                            <img src={hint_icon} className="" alt="..."></img>
                        </div>
                        <div className='col container_2_text'>
                            <h5>Innovative and Dedicated</h5>
                            <p>We always try to make good better and better the best.</p>
                        </div>
                    </div>

                    <div className='row mt-4 banner_inner_text_2'>
                        <div className='col-1 container_1'>
                            <img src={group_icon} className="" alt="..."></img>
                        </div>
                        <div className='col container_2'>
                            <h5>Diverses set of ambitious people</h5>
                            <p>We are very diverse set of people working for one cause from all over India.</p>
                        </div>
                    </div>
                </div>
                <div className='inner_banner_2 col-12 m-auto col-lg-6 col-md-10 col-sm-10' ><img src={thirdsectionImg} className="img-fluid" alt="..."></img></div>
            </div>

        </div>
    )
}

export default Third