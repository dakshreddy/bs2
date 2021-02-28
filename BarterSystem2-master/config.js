import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB6BNmaTsCLawg-_TVIbCMWqsBPUg54HD8",
    authDomain: "thebattersystemapp.firebaseapp.com",
    databaseURL: "https://thebattersystemapp.firebaseio.com",
    projectId: "thebattersystemapp",
    storageBucket: "thebattersystemapp.appspot.com",
    messagingSenderId: "164554420876",
    appId: "1:164554420876:web:ab6cf97285f178218901a9"
  };
  
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();