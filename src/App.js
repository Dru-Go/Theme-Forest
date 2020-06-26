/* eslint-disable no-unused-vars */
import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Dashboard from "./components/dashboard/dashboard";
import NotFoundError from "./components/error/404";


function App() {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/404" component={NotFoundError} />
    </Router>
  );
  
}

export default App;
