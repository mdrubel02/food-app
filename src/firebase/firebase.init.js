// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHRThI-sTRomrB5bbWpFUgmYsjPwfHiT4",
  authDomain: "food-website-9fa5a.firebaseapp.com",
  projectId: "food-website-9fa5a",
  storageBucket: "food-website-9fa5a.appspot.com",
  messagingSenderId: "147656200989",
  appId: "1:147656200989:web:c27960d81efcae452787f4"
};
 const firebaseApp =initializeApp(firebaseConfig)
 export const auth = getAuth(firebaseApp)
// Initialize Firebase
export default firebaseApp;