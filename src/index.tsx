import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Selection from "./components/Selection"
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <div>
    <div className="header-top">
      <div className="header-text">
        <p>Source code can be found on my <a href="https://github.com/karowan/animesort">github</a></p>
      </div>
      
    </div>
    <div className="main">
      <React.StrictMode>
          <Selection/>
      </React.StrictMode>
    </div>
    

  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
