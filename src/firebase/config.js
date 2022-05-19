import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'



  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projecStorage = firebase.storage()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, projectAuth, projecStorage, timestamp }