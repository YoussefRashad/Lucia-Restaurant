import React from 'react'

function Testimonial({ info, image, name, index }) {
    return (
        <div className="col-xl-4">
            <div className="testmonial_active owl-carousel">
                <div className="single_carousel mb-5">
                    <div className={`row justify-content-${index === 0 ? 'left': index === 2 ? 'center':'right'}`}>
                        <div className="col-lg-12">
                            <div className={`single_testmonial text-center`}>
                                <p>{info}</p>
                                <div className="testmonial_author">
                                    <div className="thumb">
                                        <img src={image} alt="" />
                                    </div>
                                    <h4>{name}</h4>
                                    <div className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half"></i>
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

export default Testimonial