import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {branch, compose, renderComponent, setPropTypes} from 'recompose'
import {Redirect} from 'react-router'

const mapStateToProps = state => ({
  user: state.auth.user
})

const noUser = ({user}) => !user

const RedirectToSignin = () => <Redirect to="/" />

export default compose(
  connect(mapStateToProps),
  branch(noUser, renderComponent(RedirectToSignin)),
  setPropTypes({user: PropTypes.object.isRequired})
)