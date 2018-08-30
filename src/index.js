import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/animate.min.css";
import "./assets/sass/mern-starter-app.css?v=1.0.0";
import './index.css';
import Application from './Application';

ReactDOM.render(
    <BrowserRouter>
        <Application />
    </BrowserRouter>, 
    document.getElementById('root')
);
