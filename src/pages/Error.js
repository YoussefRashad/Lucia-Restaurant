import React from 'react'
import { Link } from 'react-router-dom'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'

function Error() {

    React.useEffect(() => {
        scrollAutoFromBackToTop()
    }, [])

    return (
        <div className="error">
            <h3>no such page could be found...</h3>
            <Link to="/" className="btn-primary">
                back to menu
            </Link>
        </div>
    )
}

export default Error
