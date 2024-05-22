import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import './global.css';
require('dotenv').config();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>
);
