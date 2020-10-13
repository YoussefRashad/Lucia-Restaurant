import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className="error">
            <h3>no such page could be found...</h3>
            <Link to="/menu" className="btn-primary">
                back to menu
            </Link>
        </div>
    )
}

export default Error
