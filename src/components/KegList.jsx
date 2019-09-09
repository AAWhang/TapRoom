import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {
    names: 'ethenol',
    brand: 'walgreens',
    price: 9,
    alc: 99
  },
];

function KegList(){
  return (
    <div>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg names={keg.names}
          brand={keg.brand}
          price={keg.price}
          alc={keg.lac}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;
