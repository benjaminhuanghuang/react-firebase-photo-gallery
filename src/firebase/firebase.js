import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBb8E26eVbanh-uvI-yBG8ECeTGemiwbyw",
  authDomain: "firegram-b385a.firebaseapp.com",
  databaseURL: "https://firegram-b385a.firebaseio.com",
  projectId: "firegram-b385a",
  storageBucket: "firegram-b385a.appspot.com",
  messagingSenderId: "326376568212",
  appId: "1:326376568212:web:7028223dd1ddd31b618b81",
  measurementId: "G-EPKWZ9XVJ9"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };