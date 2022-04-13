import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import reviewimg from '../Assets/images/review.svg'
import '../Assets/css/Fourth.css'
function Sectionfourth() {
    return (
        <div className='container my-5 section_4'>
            <OwlCarousel className='owl-theme owl-carousel-container' loop margin={10} items={1}>
                <div className='item text-center ifirst_con'>
                    <div className='container mb-4 justify-content-center img-container'>
                        <img src={reviewimg} className="d-block" alt="..." />
                    </div>
                    <div className="d-block d-md-block">
                        <h4>"I just wanted to say that I'm very happy with my purchase of space so far. The documentation is outstanding - clear and detailed"</h4>
                        <h5 className='mt-4'> Philip</h5>
                        <p>Product Manager | Mailchimp.</p>
                    </div>
                </div>
                <div className='item'>
                    <h4>2</h4>
                </div>
                <div className='item'>
                    <h4>3</h4>
                </div>
            </OwlCarousel>
        </div>

    )
}

export default Sectionfourth