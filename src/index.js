import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserData from './components/UserData';
import home from './components/home';
import image from './components/image';
import Header from './components/Header';

const Routing = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/form" component={UserData} />
        <Route path="/image" component={image} />
      </Switch>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
  , document.getElementById('root'));