import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';


function NewKegForm(props){
  let _names = null;
  let _brand = null;
  let _price = null;
  let _alc = null;
  let _pints = 120;
  
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({names: _names.value, brand: _brand.value, price: _price.value, alc: _alc.value, pints: 120, id: v4(), timeOpen: new Moment()});
    _names.value = '';
    _brand.value = '';
    _price.value = '';
    _alc.value = '';
    _pints.value = 120;
  }
  return (
    <div>


      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Name'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>
        <input
          type='number'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          type='number'
          id='alc'
          placeholder='Alcohol %'
          ref={(input) => {_alc = input;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
