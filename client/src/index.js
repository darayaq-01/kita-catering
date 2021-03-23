import React from "react";
import ReactDOM from "react-dom";

import store from 'app/store'
import { Provider } from 'react-redux'

import toast, { Toaster } from 'react-hot-toast';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import App from "App"

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>,
  document.getElementById("root")
);
