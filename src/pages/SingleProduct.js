import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { MenuListContext } from '../Context/MenuList'
import defaultImage from '../assets/appetizers/ap2.jpg'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'

const SingleProduct = () => {
    const { category, id } = useParams()
    const [product, setProduct] = useState(undefined)
    const { getMenuListByCategoryAndID } = React.useContext(MenuListContext)

    useEffect(() => {
        scrollAutoFromBackToTop()
        
        const product = getMenuListByCategoryAndID(category, id)
        setProduct(product)
        console.log(product);
    }, []);
    
    return (
        <div className="about_area" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                {
                    !product ? 
                        <div className="text-center noItem">
                            <h2>No product exist</h2>
                            <Link to="/" className="btn-primary">
                                back to menu
                            </Link>
                        </div> 
                    :
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="about_thumb2">
                                    <div className="img_1 shadowItemWithoutBox">
                                        <img src={defaultImage} alt="product" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 offset-lg-1 col-md-6">
                                <div className="about_info">
                                    <div className="section_title mb-20px shadowItemWithoutBox">
                                        <span>About</span>
                                        <h3>{product.category} <br /> {product.name}</h3>
                                    </div>
                                    <p>{product.description}</p>
                                </div>
                                <div className="about_info">
                                    <div className="section_title mb-20px shadowItemWithoutBox">
                                        <span>Components:</span>
                                    </div>
                                    {
                                        product.components.map((item, index) =>{
                                            return(
                                                <h6 key={index} className="text-capitalize ">{index+1}- {item}</h6>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                }
                {
                    product && 
                    <div className="row align-items-center">
                        <h3 className="shadowItemWithoutBox">
                            Price: <span className="card-text salaryItem">{product.price}$</span>
                        </h3>
                    </div>
                }
            </div>
        </div>
    )
}

export default SingleProduct
