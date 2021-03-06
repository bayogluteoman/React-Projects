import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyCrD37P6OfaEaHC4xB3nIvzoHzUPNnDfyc",
    authDomain: "e-shoppingdb2.firebaseapp.com",
    projectId: "e-shoppingdb2",
    storageBucket: "e-shoppingdb2.appspot.com",
    messagingSenderId: "463817634765",
    appId: "1:463817634765:web:ed35c4855dc2ee86db4a84",
    measurementId: "G-E4B20FR49B"
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
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user',error.message)
      }
    }

    return userRef;

  };

  export const addCollectionsAndDocs= async (collectionKey, objectsToAdd ) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    })

     return await batch.commit();
  };

  //get the all snapshot
  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map( doc => {
      const { title, items } = doc.data();

      return{
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });

    return transformedCollection.reduce((accumulator, collection) =>{
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =  () => auth.signInWithPopup(provider);

  export default firebase;