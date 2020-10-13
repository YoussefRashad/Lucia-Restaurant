import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RestaurantProvider } from './Context'

/* Bootstrap 4 */
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery'
import 'popper.js'
import "bootstrap/dist/js/bootstrap.bundle.min";
/* End Bootstrap 4 */

import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <RestaurantProvider>
      <App />
  </RestaurantProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();