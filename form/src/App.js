import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form1 from './form'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Search from './search';
// function App() {
//   return (
//     <div className="App">
//      <Form1/>
//     </div>
//   );
// }
class App extends Component{
render() {
  const { match } = this.props;
  return (
  
      <div className="dashboard-wrapper">
      <Router>
          <Switch>
            <Redirect
              exact
              from={`/`}
              to={`/form`}
            />
            <Route
              path={`/form`}
              render={props => <Form1 {...props} />}
            />
            <Route
              path={`/search`}
              render={props => <Search {...props} />}
            />
          </Switch>
          </Router>
      </div>

            
  );
}
}
export default App;
