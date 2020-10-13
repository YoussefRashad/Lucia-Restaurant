import React from 'react'

import CarsualSlide from '../components/CarsualSlide'
import Services from '../components/Services'
import Gallery from '../components/Gallery'


function Home() {
    return (
        <main>
            <CarsualSlide />
            <Services />
            <Gallery />
        </main>
    )
}

export default Home