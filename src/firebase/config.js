import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'



  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projecStorage = firebase.storage()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  const incrementValue = firebase.firestore.FieldValue.increment(1)

  export {projectFirestore, projectAuth, projecStorage, timestamp, incrementValue }