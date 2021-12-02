import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseApp } from '@firebase/app';
import Firebase from '../src/firebase/Firebase'
import 'antd/dist/antd.css';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

