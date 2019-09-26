import React from 'react';
import PropTypes from 'prop-types';




function Keg(props){

  return (
    <div>
      <h3>{props.brand} - {props.names}</h3>
      <p><em>${props.price} {props.alc}% alcohol</em></p>
      <p>Pints: {props.pints}</p>
      <p>id: {props.kegId}</p>
      <button onClick={() => {props.decFunc(props.kegId)}}>Serve Pint</button>
      <button onClick={() => {props.delFunc(props.kegId)}}>Delete Keg</button>
      </div>
  );
}



Keg.propTypes = {
  names: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string,
  alc: PropTypes.string,
  dec: PropTypes.func,
  del: PropTypes.func
};

export default Keg;
