import React, { Component } from 'react';
import './App.css';
import TippeeList from './component/TippeeList';
import HomePage from './component/HomePage';
import { Route, withRouter} from 'react-router-dom';

class App extends Component {
 
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={HomePage} />
       <Route path="/tippees" component={TippeeList} />
        </div>
    );
  }
}


export default withRouter(App)
