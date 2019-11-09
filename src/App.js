import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from './Components/index';
import SignUp from './Components/signUp';
import FriendProfile from './Components/friendProfile';
import MyParty from './Components/myParty';
import PartySelection from './Components/partySelection';
import Profile from './Components/profile';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/signUp" component={SignUp}/>
        <Route exact path = "/friendProfile" component={FriendProfile}/>
        <Route exact path = "/myParty" component={MyParty}/>
        <Route exact path = "/partySelection" component={PartySelection}/>
        <Route exact path = "/profile" component={Profile}/>
      </Router>
    </div>
  );
}

export default App;
