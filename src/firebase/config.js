import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAa1nDytmQR5x9h2hjvu8bJwjLf3KUSX5o",
authDomain: "photo-gallery-97039.firebaseapp.com",
databaseURL: "https://photo-gallery-97039.firebaseio.com",
projectId: "photo-gallery-97039",
storageBucket: "photo-gallery-97039.appspot.com",
messagingSenderId: "67424947636",
appId: "1:67424947636:web:515ff9da0f5093687236e1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Storage
const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage};