import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';



function KegList(props){
  return (
    <div>
      
      {props.kegList.map((keg) =>
        <Keg names={keg.names}
          brand={keg.brand}
          price={keg.price}
          alc={keg.alc}
          key={keg.id}
          kegId={keg.id}
          pints={keg.pints}
          decFunc={props.dec}
          />
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  dec: PropTypes.func
};

export default KegList;
