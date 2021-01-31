import React from 'react'

import { dataLuciaMenu, dataTestimonial, dataMainMenu } from '../data'

import BestMenu from '../components/BestMenu'
import MenuList from '../components/MenuList'
import Testimonial from '../components/Testimonial'
import BreadCrumb from '../components/BreadCrumb'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'

const Menu = () => {

    React.useEffect(() => {
        scrollAutoFromBackToTop()
    }, [])

    const dataRetrieved = () => {
        return dataMainMenu.map((item) => {
            const name = item.sys.name
            const image = item.items[0].image;
            return { name, image }
        })
    }

    return (
        <main style={{ backgroundColor: 'white' }}>

            <div className="best_burgers_area">
                <div className="mb-80">
                    <BreadCrumb title="LUCIA Menu" subTitle="best ever burgers" />
                </div>
                <div className="container">
                    <div className="row">
                        {dataLuciaMenu.map((item, index) => <BestMenu key={index} {...item} />)}
                    </div>
                </div>
            </div>

            <div className="best_burgers_area" style={{ paddingTop: '120px' }}>
                <div className="mb-60">
                    <BreadCrumb title="LUCIA Menu List" subTitle="est Ever Menu List" />
                </div>
                <div className="container">
                    <div className="card-group card-Menu-List">
                        <div className="row">
                            {dataRetrieved().map((item, index)=><MenuList {...item} key={index}/>)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial_area">
                <div className="mb-60">
                    <BreadCrumb title="Testimonials" subTitle="Happy Customers" />
                </div>
                <div className="container">
                    <div className="row">
                        {dataTestimonial.map((item, index)=><Testimonial key={index} {...item} />)}
                    </div>
                </div>
            </div>

        </main>
    )

}

export default Menu
