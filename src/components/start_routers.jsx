// @flow

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Navigation from 'components/navigation';
import Home from 'components/home';
import Users from 'components/users';

export function StartRouters() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
      </div>
    </Router>
  );
}
