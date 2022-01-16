import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { MoralisProvider } from "react-moralis";


ReactDOM.render(
  <MoralisProvider appId="8xKfFlCqwSfXMDH91JDH7uFeL829Y056oCbZMe20" serverUrl="https://p5gbiowyjd95.usemoralis.com:2053/server">
    <App />
  </MoralisProvider>,
  document.getElementById('root')
);


