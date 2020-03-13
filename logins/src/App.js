import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation
} from 'react-router-dom';


import Welcome from './Welcome';
import Final from './Final'

import Login from './Login';
import Sidebar from './sidebar';


class App extends Component{
render() {
  const { match } = this.props;
  return (
  
      <div className="dashboard-wrapper">
      <Router>
        <Sidebar/>
          <Switch>
            <Redirect
              exact
              from={`/`}
              to={`/Login`}
            />
           
           

            <Route
              path={`/Login`}
              render={props => <Login {...props} />}
            />
            <Route
              path={`/Welcome`}Form
              render={props => <Welcome {...props} />}
            />
             <Route
              path={`/Final`}
              render={props => <Final {...props} />}
            />
            
            
          </Switch>
          </Router>
      </div>

            
  );
}
}
export default App;
