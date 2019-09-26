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
    this.sortByName = this.sortByName.bind(this);
    this.sortByBrand = this.sortByBrand.bind(this);
    this.sortByPrice = this.sortByPrice.bind(this);
    this.sortByAlc = this.sortByAlc.bind(this);
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

  sortByName() {
    let newMasterKegList = this.state.masterKegList.sort((a, b) => (a.names > b.names) ? 1 : -1 );
    this.setState({ masterKegList: newMasterKegList });
  }

  sortByBrand() {
    let newMasterKegList = this.state.masterKegList.sort((a, b) => (a.brand > b.brand) ? 1 : (a.brand === b.brand) ? ((a.names > b.names) ? 1 : -1) : -1 );
    this.setState({ masterKegList: newMasterKegList });
  }

  sortByPrice() {
    let newMasterKegList = this.state.masterKegList.sort((a,b) => a.price - b.price);
    this.setState({ masterKegList: newMasterKegList });
  }

  sortByAlc() {
    let newMasterKegList = this.state.masterKegList.sort((a,b) => a.alc - b.alc);
    this.setState({ masterKegList: newMasterKegList });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <KegList kegList={this.state.masterKegList} dec={this.decrimentPints} del={this.deleteKeg} sbn={this.sortByName} sbb={this.sortByBrand} sbp={this.sortByPrice} sba={this.sortByAlc} />} />          
           <Route path='/newkeg' render={() => <NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
