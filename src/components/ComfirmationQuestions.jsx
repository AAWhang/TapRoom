import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>Are you SURE?!</p>
      <button onClick={props.onTroubleshootingComfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingComfirmation: PropTypes.func
};

export default ConfirmationQuestions;
