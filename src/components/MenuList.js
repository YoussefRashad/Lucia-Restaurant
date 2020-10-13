import React from 'react'
import { Link } from 'react-router-dom'

const MenuList = ({name, image}) => {
    return (
        <div className="MenuList col-lg-4 col-md-6 col-sm-12 mb-5">
            <img src={image} className="card-img-top" alt={name} height="350"/>
            <div className="card-body" >
                <h5 className="card-title text-capitalize">{name}</h5>
            </div>
            <div className="card-footer">
                <small className="text-muted">
                    <Link to={`/menu/${name}`} className="btn btn-outline-success btn-lg btn-block">
                        More Info
                    </Link>
                </small>
            </div>
        </div>
    )
}

export default MenuList
