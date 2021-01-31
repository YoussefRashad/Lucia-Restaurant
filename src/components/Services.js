import React from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import BreadCrumb from './BreadCrumb';
const Services = () => {
    const services = [
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
    return (
        <section className="services">
            <BreadCrumb title="Services" subTitle="our services" />

            <div className="services-center">
                {
                    services.map((item, index) => {
                        return (
                            <div key={index} className="service shadowItemWithoutBox">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default Services
