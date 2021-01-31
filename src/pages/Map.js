import React from 'react'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'

function Map() {

    React.useEffect(() => {
        scrollAutoFromBackToTop()
    }, [])

    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.8165946670733!2d29.90130901514263!3d31.19809828147738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3ed23744f5b%3A0xc3722d9c6e04c1a6!2sSanta%20Lucia!5e0!3m2!1sen!2seg!4v1574803405168!5m2!1sen!2seg" width="100%" height="633" frameBorder="0" style={{ border: 0 }} allowFullScreen="" title="Lucias" className="my-5"></iframe>
    )
}

export default Map
