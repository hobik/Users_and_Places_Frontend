import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Users from './user/pages/Users'
import NewPlaces from './places/pages/NewPlaces'
const App = () => {
  return <Router>
  <Route path="/" exact>
  <Users />
  </Route>
  <Route path="/places/new" exact> 
  <NewPlaces />
  </Route>
  <Redirect to="/"/> 

  </Router>;
}

export default App;
