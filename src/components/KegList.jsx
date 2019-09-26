import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';



function KegList(props){
  return (
    <div>
      <button onClick={() => {props.sbn()}}>Name</button>
      <button onClick={() => {props.sbb()}}>Brand</button>
      <button onClick={() => {props.sbp()}}>Price</button>
      <button onClick={() => {props.sba()}}>Alcohol Percent</button>
      {props.kegList.map((keg) =>
        <Keg names={keg.names}
          brand={keg.brand}
          price={keg.price}
          alc={keg.alc}
          key={keg.id}
          kegId={keg.id}
          pints={keg.pints}
          decFunc={props.dec}
          delFunc={props.del}
          />
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  dec: PropTypes.func,
  del: PropTypes.func
};

export default KegList;
