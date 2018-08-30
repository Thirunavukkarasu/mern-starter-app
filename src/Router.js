import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/signin' component={SignIn}/>
      <Route exact path='/signup' component={SignUp}/>
    </Switch>
  </main>
)

export default Router
