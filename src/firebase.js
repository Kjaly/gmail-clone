import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBpz9hkToiRMplaNblFWugf6qyCOWBqqyg",
  authDomain: "clone-350d9.firebaseapp.com",
  projectId: "clone-350d9",
  storageBucket: "clone-350d9.appspot.com",
  messagingSenderId: "28286692013",
  appId: "1:28286692013:web:fe4ca2c552d0bed3a43424",
  measurementId: "G-QS9C6M6X9V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider}


