import React from 'react'
import { Route } from 'react-router'
import AsyncApp from './containers/AsyncApp'
import Login from './containers/Login'

export default (
  <Route path="/" component={AsyncApp}>
     <Route path="/tes"
           component={Login} />
  </Route>
)
