import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import createStore from './store'
import Application from './Application' 
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/animate.min.css";
import "font-awesome/css/font-awesome.css"
import "./assets/sass/mern-starter-app.css?v=1.0.0";
import './index.css';

const history = createHistory({})
const store = createStore(history)

ReactDOM.render(
    <Provider store={store}>
        <Application history={history}/>
    </Provider>, 
    document.getElementById('root')
);
