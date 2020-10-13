import React from 'react'

const Alert = ({ type, text}) => {
    return (
        <div className={`alert alert-${type} text-center container my-3`}>{text}</div>
    )
}

export default Alert;