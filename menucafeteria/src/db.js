import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyBSlea_nQwK-hJINNX7ek1GNJG-MCDgPmA",
    authDomain: "menucafeteriav2.firebaseapp.com",
    projectId: "menucafeteriav2",
    storageBucket: "menucafeteriav2.appspot.com",
    messagingSenderId: "1078892864837",
    appId: "1:1078892864837:web:1d88c62e917f89abf2ca2c"
};

// Get a Firestore instance
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })