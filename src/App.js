import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav'
import {Route} from 'react-router-dom';
import Home from './components/home'
import IOT  from './components/iot'
import Device from './components/device'
import Regulator from './components/regulator'
// import Dashboard from './components/dashboard'



class App extends Component {

  state={
    rate:40
  }
  wrcrate=(r)=>{
    this.setState({rate:r});
  }


  render() {
    return (
      <div>
        <Navbar wrc={this.state.rate}></Navbar>
        <div className='Body'>
          <div className='container'>
          <Route exact path="/" component={Home} />
          <Route  path="/regulator" render={(props)=><Regulator {...props} wrc={(r)=>this.wrcrate(r)} />} />
          <Route path="/IOT_Anamoly" component={IOT} />
         <Route path="/Device_Auth" component={Device} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;