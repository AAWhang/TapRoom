import React from 'react';
import helloworld from '../assets/images/helloworld.jpg';
import ComfirmationQuestions from './ComfirmationQuestions';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingComfirmation = this.handleTroubleshootingComfirmation.bind(this);
  }

  handleTroubleshootingComfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){

    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>;
    } else {
      currentlyVisibleContent = <ComfirmationQuestions onTroubleshootingComfirmation={this.handleTroubleshootingComfirmation}/>;
    }
    return (
      <div>
        <img src={helloworld} width={500} height={300}/>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;
