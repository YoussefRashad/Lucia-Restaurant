import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './assets/Styles/_loader.scss'
import UserProvider from './Context/User'
import MenuListProvider from './Context/MenuList'


/* Bootstrap 4 */
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery'
import 'popper.js'
import "bootstrap/dist/js/bootstrap.bundle.min";
/* End Bootstrap 4 */

import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import LoadingImg from './assets/restaurant.png';

// const [loading, setLoading] = React.useState(true) //// i will change to admin loading
let loading = true;

if (loading) {
  ReactDOM.render(
    <div className="loadscreen loading">
      <div className="loader">
        <img src={LoadingImg} className="logo mb-3 d-block" alt="loading" />
        <div className="text-center mt-5">
          {
            [...new Array(7)].map((item, index) =>
              <div className="spinner-grow text-success mr-3" key={index} />)
          }
        </div>
      </div>
    </div>,
    document.getElementById('root')
  )
}

window.onload = function () {
  loading = false;
  ReactDOM.render(
    <UserProvider>
      <MenuListProvider>
        <App />
      </MenuListProvider>
    </UserProvider>,
    document.getElementById('root')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
