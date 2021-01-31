import React from 'react'

import CarsualSlide from '../components/CarsualSlide'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'


function Home() {

    React.useEffect(() => {
        scrollAutoFromBackToTop()
    }, [])

    return (
        <main style={{ backgroundColor: 'white' }}>
            <CarsualSlide />
            <Services />
            <Gallery />
        </main>
    )
}

export default Home