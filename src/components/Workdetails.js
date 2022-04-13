import React from 'react'
import firstimgbook from '../Assets/images/firstimg_book.svg'
import paymentsmadeimg from '../Assets/images/paymentsmade.svg'
import communicationimg from '../Assets/images/communication.svg'
import lotmoreimg from '../Assets/images/lotmore.svg'
import e_libraryimg from '../Assets/images/e_library.svg'
import permissionsimg from '../Assets/images/permissions.svg'
import '../Assets/css/Second.css'
import '../Assets/css/global.css'
function Workdetails() {
    return (
        <>
            <div className='container text-center my-5' id='How_we_work'>
                <h2>Everything you need for college, we got it coverd</h2>
                <p className='mt-3'>You can now say Tataa..Bye..bye to the way you persuived college</p>
            </div>
            <div className="container mb-5 row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 main_container m-auto my-5 justify-content-center">
                <div className='col col-12 column_1 '>
                    <div className="row my-4 mx-3 inner_Container" >
                        <div className='col-2 inner_Container'>
                            <img src={firstimgbook} className="" alt="..." />
                        </div>
                        <div className='col'>
                            <h5 className="card-title">Digital Notes</h5>
                        </div>
                        <p className="card-text mt-3">With our solution students will find it easy to manage and handle all the text and notebooks in one place.</p>
                    </div>
                </div>

                <div className='col col-12 column_1'>
                    <div className="row my-4 mx-3 inner_Container inner_Container">
                        <div className='col-2'>
                            <img src={paymentsmadeimg} className="" alt="..." />
                        </div>
                        <div className='col'>
                            <h5 className="card-title">Payments made simple</h5>
                        </div>
                        <p className="card-text mt-3">Tried of carrying cash and managing them? you can now manage and maintain your money very easily.</p>
                    </div>
                </div>

                <div className='col col-12 column_1'>
                    <div className="row my-4 mx-3 inner_Container inner_Container" >
                        <div className='col-2'>
                            <img src={e_libraryimg} className="" alt="..." />
                        </div>
                        <div className='col'>
                            <h5 className="card-title">E-Library</h5>
                        </div>
                        <p className="card-text mt-3">E-Library is also now included in this solution with which you will not have to worry about lending books anymore.</p>
                    </div>
                </div>

                <div className='col col-12 column_1'>
                    <div className="row my-4 mx-3 inner_Container inner_Container" >
                        <div className='col-2'>
                            <img src={communicationimg} className="" alt="..." />
                        </div>
                        <div className='col'>
                            <h5 className="card-title">Communications</h5>
                        </div>
                        <p className="card-text mt-3">Now leave the fear of missing out an event or any kind of important announcements because we got yo covered.</p>
                    </div>
                </div>

                <div className='col col-12 column_1'>
                    <div className="row my-4 mx-3 inner_Container inner_Container" >
                        <div className='col-2'>
                            <img src={permissionsimg} className="" alt="..." />
                        </div>
                        <div className='col'>
                            <h5 className="card-title">Permissions</h5>
                        </div>
                        <p className="card-text mt-3">How cool it would be if you can request permissions online and let it be accepted online.</p>
                    </div>
                </div>

                <div className='col col-12 column_1'>
                    <div className="row my-4 mx-3 inner_Container inner_Container" >
                        <div className='col-2'>
                            <img src={lotmoreimg} className="" alt="..." />
                        </div>
                        <div className='col'>
                            <h5 className="card-title">Lot more to come...</h5>
                        </div>
                        <p className="card-text mt-3">We will be adding modules further and ypu will be able to see all the cool features over here.</p>
                    </div>
                </div>

            </div>

        </>

    )
}

export default Workdetails