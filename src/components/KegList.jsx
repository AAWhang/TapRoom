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
          pints={keg.pints}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
