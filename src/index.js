import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartContextProvider } from './components/context/CardContext';
import { initializeApp} from "firebase/app"

const firebaseConfig = {

  apiKey: "AIzaSyD2CK_FKbEfSld3T4ypAbWGC6AckMo08GY",
  authDomain: "ecomercecoderhouse-8ebdd.firebaseapp.com",
  projectId: "ecomercecoderhouse-8ebdd",
  storageBucket: "ecomercecoderhouse-8ebdd.appspot.com",
  messagingSenderId: "966800437885",
  appId: "1:966800437885:web:5f32b1f40ad59cedc17714"

};
// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>

);
