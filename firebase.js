// Import the functions you need from the SDKs you need
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDFigs-iQiZpnKqQi8jAtxZe1dzG61wPY",
  authDomain: "buddy-app-b0b34.firebaseapp.com",
  projectId: "buddy-app-b0b34",
  storageBucket: "buddy-app-b0b34.appspot.com",
  messagingSenderId: "396989920443",
  appId: "1:396989920443:web:51f57f6df7e85c81f4a59e"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth()

export { auth };