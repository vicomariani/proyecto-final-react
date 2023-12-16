import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmCTvtkye1BSNTknBym9WIRHPzE905WNw",
  authDomain: "mundo-digital-react.firebaseapp.com",
  projectId: "mundo-digital-react",
  storageBucket: "mundo-digital-react.appspot.com",
  messagingSenderId: "449783017217",
  appId: "1:449783017217:web:68c3b41ca32029c1e5f500"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)