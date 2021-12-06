import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import StartScreen from "./startScreen/StartScreen";


ReactDOM.render(
  <React.StrictMode>
      <StartScreen/>
      <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
