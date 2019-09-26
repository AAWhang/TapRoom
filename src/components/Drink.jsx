import React from 'react';
import PropTypes from 'prop-types';




function Drink(props){

  return (
    <div>
      <h3>{props.brand} - {props.names}</h3>
      <p><em>${props.price} | {props.alc}% alcohol</em></p>
      </div>
  );
}



Drink.propTypes = {
  names: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string,
  alc: PropTypes.string
};

export default Drink;
