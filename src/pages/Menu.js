import React from 'react'

import { dataLuciaMenu, dataTestimonial, dataMainMenu } from '../data'

import BestMenu from '../components/BestMenu'
import MenuList from '../components/MenuList'
import Testimonial from '../components/Testimonial'


const Menu = () => {

    const dataRetrieved = () => {
        const dataReturned = dataMainMenu.map((item) => {
            const name = item.sys.name
            const image = item.items[0].image;
            return { name, image }
        })
        return dataReturned
    }

    return (
        <main>

            <div className="best_burgers_area" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center mb-80">
                                <span>LUCIA Menu</span>
                                <h3>Best Ever Burgers</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {dataLuciaMenu.map((item, index) => <BestMenu key={index} {...item} />)}
                    </div>
                </div>
            </div>


            <div className="best_burgers_area" style={{ backgroundColor: 'white', paddingTop: '120px' }}>

                <div className="section_title text-center mb-5">
                    <span>LUCIA Menu List</span>
                    <h3>Best Ever Menu List</h3>
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
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section_title mb-60 text-center">
                                <span>Testimonials</span>
                                <h3>Happy Customers</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {dataTestimonial.map((item, index)=><Testimonial key={index} {...item} />)}
                    </div>
                </div>
            </div>

        </main>
    )

}

export default Menu
