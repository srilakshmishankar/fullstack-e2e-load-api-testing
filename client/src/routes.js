import React from 'react'
import { Switch, Route } from 'react-router'

import NewSession from './containers/NewSession/NewSession'
import Sessions from './containers/Sessions/Sessions'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={NewSession} />
    <Route exact path="/sessions" component={Sessions} />
  </Switch>
)

export default Routes
