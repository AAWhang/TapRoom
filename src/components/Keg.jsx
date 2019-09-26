import React from 'react';
import PropTypes from 'prop-types';




function Keg(props){
  const good = { color: 'green' };
  const medium = { color: 'orange' };
  const warning = { color: 'red' };
  let pints;

  if (props.pints > 80) pints = <p>pints: <span style={good}>{props.pints}</span></p>;
  else if (props.pints > 40) pints = <p>pints: <span style={medium}>{props.pints}</span></p>;
  else if (props.pints > 0) pints = <p>pints: <span style={warning}>{props.pints}</span></p>;

  return (
    <div>
      <h3>{props.brand} - {props.names}</h3>
      <p><em>${props.price} {props.alc}% alcohol</em></p>
      {pints}
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
