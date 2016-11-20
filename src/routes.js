import React from 'react'
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import App from './App';
import Dashboard from './dashboard/StudentDash';
import HomePage from './homePage/HomePage'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
    </Route>
    <Route path="dashboard" component={Dashboard}/>
  </Router>
)
