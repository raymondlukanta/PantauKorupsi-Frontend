import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { SignupPage } from 'containers/SignupPage';
import { List } from 'containers/List';
import { IssuesPage } from 'containers/IssuesPage';
import { IssueDetail } from 'containers/IssueDetail';
import { IssueFormPage } from 'containers/IssueFormPage';
import { ActorsPage } from 'containers/ActorsPage';
import { ActorDetailPage } from 'containers/ActorDetailPage';
import { OrganizationsPage } from 'containers/OrganizationsPage';
import { OrganizationDetailPage } from 'containers/OrganizationDetailPage';
import { TesRymd } from 'containers/TesRymd';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home} />
    <Route path="signup" component={SignupPage} />
    <Route path="list" component={List} />
    <Route path="issues" component={IssuesPage} />
    <Route path="issues/new" component={IssueFormPage} />
    <Route path="issues/:id" component={IssueDetail} />
    <Route path="actors" component={ActorsPage} />
    <Route path="actors/:id" component={ActorDetailPage} />
    <Route path="organizations" component={OrganizationsPage} />
    <Route path="organizations/:id" component={OrganizationDetailPage} />
    <Route path="raymond" component={TesRymd} />
  </Route>
);