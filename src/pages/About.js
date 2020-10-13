import React from 'react';

import { restaurantImages } from '../data'
import Features from '../components/Features'

import Image1 from '../assets/about/1.png'
import Image2 from '../assets/about/2.png'
import Image3 from '../assets/jessica-signature.png'


const index = () => {
  return (
    <main>

      <div className="about_area" style={{ backgroundColor: '#fff'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="about_thumb2">
                <div className="img_1">
                  <img src={Image1} alt="about" />
                </div>
                <div className="img_2">
                  <img src={Image2} alt="about" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 offset-lg-1 col-md-6">
              <div className="about_info">
                <div className="section_title mb-20px">
                  <span>About Us</span>
                  <h3>Lucia Restaurant <br />
                      in your City</h3>
                </div>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate</p>
                <div className="img_thumb">
                  <img src={Image3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {restaurantImages.map((item, index) => <Features db={item.info} image={item.image} key={index} index={index+1} />)}

    </main>
  );
}

export default index;