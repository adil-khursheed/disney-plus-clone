import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBuHItN09sFfSuMGAo7e1GtJJbLrD8aEDY",
  authDomain: "disneyplusclone-d0c28.firebaseapp.com",
  projectId: "disneyplusclone-d0c28",
  storageBucket: "disneyplusclone-d0c28.appspot.com",
  messagingSenderId: "979076447806",
  appId: "1:979076447806:web:64786bcdeee3bb16e09b6f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;