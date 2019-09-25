import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import NewKegControl from './NewKegControl';
import Error404 from './Error404';

class App extends React.Component {

  handleAddingNewKegToList(newKeg) {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
  }

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.decrimentPints = this.decrimentPints.bind(this);
  }

  // componentDidMount() {
  //   this.waitTimeUpdateTimer = setInterval(() =>
  //     this.updateKegElapsedWaitTime(),
  //   800
  //   );
  // }

  // updateKegElapsedWaitTime() {
  //   let newMasterKegList = this.state.masterKegList.slice();
  //   newMasterKegList.forEach((keg) =>
  //     keg.formattedWaitTime = (keg.timeOpen).fromNow(true)
  //   );
  //   this.setState({ masterKegList: newMasterKegList });
  // }

  // componentWillUnmount() {
  //   clearInterval(this.waitTimeUpdateTimer);
  // }

  decrimentPints(id) {
    // const {id} = props.location.state
    console.log(id);
    let newMasterKegList = this.state.masterKegList.map(x => { 
      if (x.id === id) {
        console.log("TRUE: ", id)
        x.pints--;
        console.log("X: ", x);
        return x;
      }
    });
    console.log("original keglist: ", this.state);
    console.log("new list: ", newMasterKegList);
    this.setState({ masterKegList: newMasterKegList });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <KegList kegList={this.state.masterKegList} dec={this.decrimentPints} />} />
          <Route path ='/dec' render={() => <KegList dec={this.decrimentPints} kegList={this.state.masterKegList}/> } />
          <Route path='/newkeg' render={() => <NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
