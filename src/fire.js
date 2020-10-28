import firebase from 'firebase';

 var firebaseConfig = {
   apiKey: "AIzaSyAIRqWorj71VD46yc6lgOuFJPSd7VGkbqU",
   authDomain: "login-8afa2.firebaseapp.com",
   databaseURL: "https://login-8afa2.firebaseio.com",
   projectId: "login-8afa2",
   storageBucket: "login-8afa2.appspot.com",
   messagingSenderId: "890118985208",
   appId: "1:890118985208:web:43a32b73448e37fc71b20d"
 };
 
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
