import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'

import SwitchWithNotFound from './components/router/SwitchNotFound'
import requireUser from './components/router/requireUser'

import Header from './components/Header'
import Home from './pages/Home'
import SignIn from './pages/SignIn'

const Router = ({ history }) => (
  <ConnectedRouter history={history}>
    <Fragment>
      <Header />
      <main>
        <SwitchWithNotFound>
          <Route exact path='/' component={SignIn} />
          <Route exact path='/home' component={requireUser(Home)} />
        </SwitchWithNotFound>
      </main>
    </Fragment>
  </ConnectedRouter>
)

export default Router
