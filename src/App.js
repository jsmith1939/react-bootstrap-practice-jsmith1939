import React  from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
  )
}

export default App;
