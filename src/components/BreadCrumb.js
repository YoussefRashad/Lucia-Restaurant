import React from 'react'

const BreadCrumb = ({title, subTitle}) => {
    return (
        <div className="container shadowItemWithoutBox">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title text-center">
                        <span>{title}</span>
                        <h3>{subTitle}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb
