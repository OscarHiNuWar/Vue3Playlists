import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA73uKCpcbRnGNC__lnxl6zLWlELD0qBio",
  authDomain: "muso-gamers.firebaseapp.com",
  projectId: "muso-gamers",
  storageBucket: "muso-gamers.appspot.com",
  messagingSenderId: "1056089785427",
  appId: "1:1056089785427:web:06e304bca8994362a9b2a6"
};

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projecStorage = firebase.storage()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, projectAuth, projecStorage, timestamp }