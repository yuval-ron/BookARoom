import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB0_26MZw1yEudBgCI0JF934KqLXr-s7mw",
  authDomain: "bookaroom-31e95.firebaseapp.com",
  databaseURL: "https://bookaroom-31e95.firebaseio.com",
  projectId: "bookaroom-31e95",
  storageBucket: "bookaroom-31e95.appspot.com",
  messagingSenderId: "313149581475",
  appId: "1:313149581475:web:2ec92aca0ceec929"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export default {
  createNewUser: (username, password) => {
    return database.ref(`users/${username}`).set({username, password})
  },
  getAllUsers: () => {
    return database.ref("users").once('value').then(snapshot => snapshot.val())
  }
}
