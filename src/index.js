import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDym_y0BKp5e5yaW9wm-EkNJfN5mBFcKc",
  authDomain: "proyecto-final-react-7bacd.firebaseapp.com",
  projectId: "proyecto-final-react-7bacd",
  storageBucket: "proyecto-final-react-7bacd.appspot.com",
  messagingSenderId: "1046482779279",
  appId: "1:1046482779279:web:c5f6d57a21ceff2b1c44fa"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



