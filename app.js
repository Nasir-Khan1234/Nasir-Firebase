
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyB93Lm9G5vpRMtEAxCxAMUVTX8GmaGWUhc",
    authDomain: "registration-86d06.firebaseapp.com",
    projectId: "registration-86d06",
    storageBucket: "registration-86d06.firebasestorage.app",
    messagingSenderId: "532371212422",
    appId: "1:532371212422:web:468e7d1e49b137745fa907",
    measurementId: "G-YD191DLM83"
  };
const app = initializeApp(firebaseConfig);



const auth = getAuth();
let getBtn = document.getElementById('btn')

getBtn.addEventListener('click', function(){
const email = document.getElementById('semail').value
const password = document.getElementById('spassword').value

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  const user = userCredential.user;
  alert(user.email+' account created successfully')

})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorCode,errorMessage)
});
})