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
    this.deleteKeg = this.deleteKeg.bind(this);
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
    let newMasterKegList = this.state.masterKegList.map(x => { 
      if (x.id === id) {
        x.pints--;
        return x;
      }
      return x;
    });
    this.setState({ masterKegList: newMasterKegList });
  }

  deleteKeg(id) {
    console.log(id);
    console.log(this.state.masterKegList);
    let newMasterKegList = this.state.masterKegList.filter(x => x.id != id); 
    this.setState({ masterKegList: newMasterKegList });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <KegList kegList={this.state.masterKegList} dec={this.decrimentPints} del={this.deleteKeg} />} />          
           <Route path='/newkeg' render={() => <NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
