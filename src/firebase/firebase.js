// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVpxCspLAy9zZj9RyOWLeIBASuKe6FM3U",
    authDomain: "news-paper-d6e2a.firebaseapp.com",
    projectId: "news-paper-d6e2a",
    storageBucket: "news-paper-d6e2a.appspot.com",
    messagingSenderId: "364424143721",
    appId: "1:364424143721:web:8a14ae156d7b53428193f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { auth, app }

// export const db = getFirestore(app);



// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth'; // Add this line for authentication

// const firebaseConfig = {
//     apiKey: "AIzaSyCVpxCspLAy9zZj9RyOWLeIBASuKe6FM3U",
//     authDomain: "news-paper-d6e2a.firebaseapp.com",
//     projectId: "news-paper-d6e2a",
//     storageBucket: "news-paper-d6e2a.appspot.com",
//     messagingSenderId: "364424143721",
//     appId: "1:364424143721:web:8a14ae156d7b53428193f8"
// };

// firebase.initializeApp(firebaseConfig);

// export default firebaseConfig;
