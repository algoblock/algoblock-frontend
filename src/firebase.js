// Import the functions we need from the SDKs we need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {updateProfile} from "firebase/auth";

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

/*
The following are functions that create/authenticate a user from signup/signin
The user object firebase.UserCredential is exported after successful authentication
This object should be used wherever the user's information is required
*/

export const createUserWithEmailPass = (email, pass, displayName) => {
  auth.createUserWithEmailAndPassword(email, pass)
    .then(() => {
      updateDisplayName(displayName);
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else if (errorCode === 'auth/email-already-exists') {
        alert('The provided email is already in use by an existing user.');
      } else {
        alert(error.message);
      }
    })
}

export const updateDisplayName = (displayName) => {
  updateProfile(auth.currentUser, {
    displayName: displayName,
  }).catch((error) => {
      alert(error.message);
    })
}

export const signInWithEmailPass = (email, pass) => {
  auth.signInWithEmailAndPassword(email, pass)
    .catch((error) => {
      alert(error.message);
    })
}

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider)
    .catch((error) => {
      alert(error.message);
    });
}

/*
The following are used to revoke a user's authentication status (JWT)
*/
export const signOut = () => {
  auth.signOut()
    .then(() => {
      console.log('Logged Out')
    })
    .catch((error) => {
      alert(error.message)
    })
}
