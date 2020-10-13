import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services:[
            {
                icon: <FaCocktail />,
                title: "Free Juices",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            }, 
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            }
        ]
    }
    render() {
        return (
            <section className="services">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title text-center">
                                    <span>Services</span>
                                    <h3>our services</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <div key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        )
    }
}
