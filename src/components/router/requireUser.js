import React from 'react'
import {compose} from 'recompose'

import Unauthorized from '../errors/Unauthorized'
import userOrRedirect from './userOrRedirect'

const enhance = compose(userOrRedirect)

/**
 * This can be used to wrap components and only render them if the user is
 * logged on and has a role that matches one in the authorizedRoles param
 */
const requireUser = (WrappedComponent, permissionName) =>{
  return enhance( ({ user, ...props}) => {
    return user && (permissionName ? user.permissions && user.permissions.includes(permissionName): true)?
      <WrappedComponent {...props} /> :
      <Unauthorized />
  })
}
  

export default requireUser