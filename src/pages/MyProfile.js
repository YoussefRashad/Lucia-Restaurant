import React from 'react'
import { Link } from 'react-router-dom'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'

const MyProfile = () => {

    React.useEffect(() => {
        scrollAutoFromBackToTop()
    }, [])

    return (
        <div style={{ backgroundColor: '#fff', height: '40vh' }}>
            <div className="text-center noItem">
                <h2>Under developing ...</h2>
                <Link to="/" className="btn-primary">
                    back to menu
                </Link>
            </div> 
        </div>
    )
}

export default MyProfile
