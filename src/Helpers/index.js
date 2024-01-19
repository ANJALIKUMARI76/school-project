// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwEqzSzuYQFCiULI_210LVBnBJz1K5nyY",
  authDomain: "caribooking.firebaseapp.com",
  projectId: "caribooking",
  storageBucket: "caribooking.appspot.com",
  messagingSenderId: "182906216618",
  appId: "1:182906216618:web:ec8cdd4b8eba7ff96970d3",
  measurementId: "G-NLJ834KTHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export{analytics}