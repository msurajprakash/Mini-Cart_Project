import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCShWiqXnm9k0VcFV3ys8HTGPp4TWP5-XU",
  authDomain: "cartapp-13914.firebaseapp.com",
  projectId: "cartapp-13914",
  storageBucket: "cartapp-13914.appspot.com",
  messagingSenderId: "292423444025",
  appId: "1:292423444025:web:34df66c2b6efb03b890fe8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
