import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './tests/test'
import ShowList from './components/ShowList'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
      <ShowList year="2020" season="winter"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
