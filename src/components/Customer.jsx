import React from 'react';
import Drink from './Drink';
import PropTypes from 'prop-types';



function Customer(props){
    let total = 0;
    if (props.custList.length === 0) total = 0;
    else props.custList.map(x => total += parseInt(x.price));
  return (
    <div>
      <hr/>
      <h1>Customer Order</h1>
      {props.custList.map((drink) =>
        <Drink names={drink.names}
          brand={drink.brand}
          price={drink.price}
          alc={drink.alc}
          />
      )}
      <h2>total: ${total}</h2>
    </div>
  );
}

Customer.propTypes = {
    custList: PropTypes.array
};

export default Customer;
