import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  
const firebaseConfig = {
  apiKey: "AIzaSyC_CTOG7jE-HxH8oWqj31X83yIm8uNAhfw",
  authDomain: "netflix-blossom.firebaseapp.com",
  projectId: "netflix-blossom",
  storageBucket: "netflix-blossom.appspot.com",
  messagingSenderId: "752375900402",
  appId: "1:752375900402:web:05b886a4d778f2c8f8886b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth };
export default db;