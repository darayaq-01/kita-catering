import React from "react";
import ReactDOM from "react-dom";

// redux
import store from './_helpers/store'
import { Provider } from 'react-redux'

//style
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
