import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RegisterFacility from './registerFacility';
import RegisterParents from './registerParents';
import Login from './Login';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RegisterFacility />
    <RegisterParents />
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
