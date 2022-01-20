// Import the functions we need from the SDKs we need
import firebase from "firebase/compat/app"
import "firebase/compat/auth";

// Algoblock's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmPN3zqTOJdjfv7F10Pe3o08jDxKQJ5dc",
  authDomain: "commanding-time-331100.firebaseapp.com",
  projectId: "commanding-time-331100",
  storageBucket: "commanding-time-331100.appspot.com",
  messagingSenderId: "361114328572",
  appId: "1:361114328572:web:64a11e4cf555e1d8f9a679"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
    .then((res) => {
      console.log(res.user)
    })
    .catch((error) => {
      console.log(error.message)
    });
}

export const signOut = () => {
  auth.signOut()
    .then(() => {
      console.log('Logged Out')
    })
    .catch((error) => {
      console.log(error.message)
    })
}
