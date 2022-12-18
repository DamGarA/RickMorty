import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import './index.css'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store.js';

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>
//   , document.getElementById('root')
// )

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
     <Router>
      <App />
    </Router>
  </Provider>
)