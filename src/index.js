import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Home/>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
