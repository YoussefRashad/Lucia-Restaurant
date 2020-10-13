import React from 'react';

const Item = ({type, image, salary, components}) => {
  return (
    <div id="one" className="col-lg-4 col-md-6 col-sm-12">
      <div className="two">
        <h1 style={{marginTop: '60px'}}>components</h1> <br />
        <p style={{fontSize: '20px'}}>{components}</p>
      </div>
      <div className="card" style={{textAlign: 'center', margin: '10px'}}>
        <img
          className="card-img-top"
          src={image}
          width="150"
          height="200"
          alt={type}
        />
        <h2 className="card-title">{type}</h2>
        <p className="card-text salaryItem">{salary}</p>
      </div>
    </div>
  );
};

export default Item;

