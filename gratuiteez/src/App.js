import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage.employee';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <div className="container">
              <Router>
                  <Route exact path="/:filter?" component={HomePage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/register" component={RegisterPage} />
              </Router>
          </div>
        </div>
    );
  }
}


export default App
