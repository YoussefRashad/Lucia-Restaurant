import React from 'react'

import carsualSlide1 from '../assets/carsualSlide/res1.png'
import carsualSlide2 from '../assets/carsualSlide/res2.png'
import carsualSlide3 from '../assets/carsualSlide/res3.png'
import carsualSlide4 from '../assets/carsualSlide/res4.png'
import carsualSlide5 from '../assets/carsualSlide/res5.jpg'
import carsualSlide6 from '../assets/carsualSlide/res6.png'
import carsualSlide7 from '../assets/carsualSlide/res7.jpg'

function CarsualSlide() {
    const Images = [carsualSlide1, carsualSlide2, carsualSlide3, carsualSlide4, carsualSlide5, carsualSlide6, carsualSlide7]
    
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ marginBottom: '50px' }}>
            <ol className="carousel-indicators">
                {
                    Images.map((item, index) => {
                    return (
                        <li data-target="#carouselExampleIndicators" data-slide-to={index} className={!index ? 'active' : ''} key={index}></li>
                    );
                })
                }
            </ol>

            <div className="carousel-inner">
                {
                    Images.map((item, index) => {
                    return (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <img src={item} className="d-block w-100" height="545px" alt="Delhi Metro" />
                        </div>
                    );
                })
                }
            </div>

            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>

        </div>
    )
}

export default CarsualSlide
