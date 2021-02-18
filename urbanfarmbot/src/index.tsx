import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, Link, NavLink} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Chose from './components/chose';
import Field from './components/field';
import Controls from './components/controls';

class App extends React.Component{


  render(){
    return(
      <div>
        <Router>
          <Route path='/' exact component={Login} />
          <Route path='/home' exact component={Home} />
          <Route path='/home/chose' exact component={Chose} />
          <Route path='/home/field' exact component={Field} />
          <Route path='/home/controls' exact component={Controls} />
        </Router>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
