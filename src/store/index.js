import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware as createRouterMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducer'
 
/**
 * Create redux store
 * @param {History} history
 */
export default (history) => {
    const routerMiddleware = createRouterMiddleware(history)

    const middleware = [thunkMiddleware, routerMiddleware]

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const enhancers = composeEnhancers(applyMiddleware(...middleware))

    const store = createStore(reducer,enhancers)

    return store
}