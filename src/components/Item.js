import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../assets/appetizers/ap1.jpg'

const Item = ({name, image, price, category, _id }) => {
  return (
    <Link 
      to={`/menu/${category}/${_id}`}
      id="one" 
      className="col-lg-4 col-md-6 col-sm-12 text-decoration-none"
    >
      <div className="two">
        <img
          className="card-img-top"
          src={defaultImage}
          width="150"
          height="100%"
          alt={name}
        />
      </div>
      <div className="card" style={{textAlign: 'center', margin: '10px'}}>
        <img
          className="card-img-top"
          src={defaultImage}
          width="150"
          height="200"
          alt={name}
        />
        <h2 className="card-title">{name}</h2>
        <p className="card-text salaryItem">{price}$</p>
      </div>
    </Link>
  );
};

export default Item;