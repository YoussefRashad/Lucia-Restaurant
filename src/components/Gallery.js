import React from 'react'

import Image1 from '../assets/gallery/1.png'
import Image2 from '../assets/gallery/2.png'
import Image3 from '../assets/gallery/3.png'
import Image4 from '../assets/gallery/4.png'
import Image5 from '../assets/gallery/5.png'
import Image6 from '../assets/gallery/6.png'
import BreadCrumb from './BreadCrumb'

const Gallery = () => {
    const Images = [Image1, Image2, Image3, Image4, Image5, Image6]
    
    return (
        <div className="gallery_area" style={{ backgroundColor: '#fff' }}>
            
            <BreadCrumb title="Gallery Image" subTitle="Our Gallery" />

            {Images.map((item, index)=>{
                return(
                    <div 
                        className={`single_gallery ${index % 5 ===0 ? 'big_img' : 'small_img'}`} key={index}
                    >
                        <img src={item} alt="" />
                    </div>
                );
            })}
        </div>
    )
}

export default Gallery

