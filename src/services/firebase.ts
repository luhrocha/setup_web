import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCOG5_g6DkAjaBpFslacV5ceCEWhBeNz_Q",  
    authDomain: "habits-69451.firebaseapp.com",  
    projectId: "habits-69451",  
    storageBucket: "habits-69451.appspot.com",  
    messagingSenderId: "278009369180",  
    appId: "1:278009369180:web:c20a494ed4cb7947780c99"  
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);