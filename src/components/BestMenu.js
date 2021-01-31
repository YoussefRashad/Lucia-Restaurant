import React from 'react'

function MenuList({image, title, subTitle, salary, style}) {
    return (
        <div className={style +" shadowItemWithoutBox"}>
            <div className="single_delicious d-flex align-items-center">
                <div className="thumb">
                    <img src={image} alt={title} />
                </div>
                <div className="info">
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                    <span>${salary}</span>
                </div>
            </div>
        </div>
    )
}

export default MenuList