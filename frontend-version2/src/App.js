import React , { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter , Route , Switch } from 'react-router-dom';
import Polls from './components/Polls';
import SinglePoll from './components/SinglePoll';
import CreatePoll from './components/CreatePoll';
import CreateUser from './components/CreateUser';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/polls' component={Polls} />
            <Route path='/polls/create' component={CreatePoll} />
            <Route path='/polls/:poll_id' component={SinglePoll} />
            <Route path='/users/create' component={CreateUser} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
   