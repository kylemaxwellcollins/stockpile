import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyANEPGr7MwicDcuwSHWPVUceRENUFMFaAk",
  authDomain: "stockpile-2f264.firebaseapp.com",
  databaseURL: "https://stockpile-2f264.firebaseio.com",
  projectId: "stockpile-2f264",
  storageBucket: "stockpile-2f264.appspot.com",
  messagingSenderId: "125302947534"
};
firebase.initializeApp(config);

const database = firebase.database()
