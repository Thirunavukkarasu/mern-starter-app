import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import Application from './Application';

ReactDOM.render(
    <BrowserRouter>
        <Application />
    </BrowserRouter>, 
    document.getElementById('root')
);
