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
  
  export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt= new Date();

      try{
        await userRef.set({
          displayName,
          email,createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user',error.message)
      }
    }

    return userRef;

  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =  () => auth.signInWithPopup(provider);

  export default firebase;