import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { List } from 'containers/List';
import { IssuesPage } from 'containers/IssuesPage';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home} />
    <Route path="list" component={List} />
    <Route path="issues" component={IssuesPage} />
  </Route>
);
