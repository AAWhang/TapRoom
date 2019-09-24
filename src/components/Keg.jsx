import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import App from './App';




function Keg(props){

  return (
    <div>
      <h3>{props.brand} - {props.names}</h3>
      <p><em>${props.price} {props.alc}% alcohol</em></p>
      <p>Pints: {props.pints}</p>
      <p>id: {props.kegId}</p>
      <button onClick={() => {props.decFunc(props.kegId)}}>Serve Pint</button>
      {/* <Link to={{ pathname: '/dec', state: { id: props.kegId} }} >Serve Pint</Link> */}
    </div>
  );
}



Keg.propTypes = {
  names: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string,
  alc: PropTypes.string,
  dec: PropTypes.func
};

export default Keg;
