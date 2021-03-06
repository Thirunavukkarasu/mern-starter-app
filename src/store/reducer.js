import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'

import auth from './authReducer'

export default combineReducers({
    auth,
    router
})