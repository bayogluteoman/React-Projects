import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyCM59qJDqJM1f9NIRwiK7w8cjvrDfeEb64",
    authDomain: "e-shoppingdb.firebaseapp.com",
    projectId: "e-shoppingdb",
    storageBucket: "e-shoppingdb.appspot.com",
    messagingSenderId: "1044268393914",
    appId: "1:1044268393914:web:f53bbdb58bfd8608c0a983",
    measurementId: "G-E9DV07YJFM"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =  () => auth.signInWithPopup(provider);

  export default firebase;