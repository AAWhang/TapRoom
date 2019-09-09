import React from 'react';
// import helloworld from '../assets/images/helloworld.jpg';

function NewTicketForm(){
  return (
    <div>

  // <img src={helloworld}/>

      <form>
        <input
          type='text'
          id='names'
          placeholder='Name'/>
          <input
            type='text'
            id='brand'
            placeholder='Brand'/>
            <input
              type='number'
              id='price'
              placeholder='Price'/>
              <input
                type='number'
                id='alc'
                placeholder='Alcohol %'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
