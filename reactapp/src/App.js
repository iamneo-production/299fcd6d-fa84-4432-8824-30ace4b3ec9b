/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;  */


import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import DHome from './Component/DHome';

import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';
import AddIssue from './Component/AddIssue';
import Header from './Component/Header';
import EditUser from './Component/EditUser';
   
  


import './App.css';
 function App() {
  return (
  
       <BrowserRouter>
      <Switch>

        <Route path="/dhome" exact component={DHome} />
        <Route path="/home" exact component={Home} />
       
        <Route path="/" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/addIssue" exact component={AddIssue} />
        <Route path="/header" exact component={Header} />
        <Route path="/edit" exact component={EditUser} />




        </Switch>
    </BrowserRouter>
  );
}

export default App;

