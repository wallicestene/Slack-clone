import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD0VwLXKB_0NRTn7OhJzNTifNgvKAJ78ic",
    authDomain: "slack-clone-a1504.firebaseapp.com",
    projectId: "slack-clone-a1504",
    storageBucket: "slack-clone-a1504.appspot.com",
    messagingSenderId: "88917425645",
    appId: "1:88917425645:web:2b30a83e7a7252a9c77be4"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig)
  const db = firebaseapp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  
  export {auth, provider, db}