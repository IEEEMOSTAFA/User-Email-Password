// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBflbNDYkHznHVqCzgtV-IFa339GkVtZi4",
  authDomain: "user-email-password-auth-3cae8.firebaseapp.com",
  projectId: "user-email-password-auth-3cae8",
  storageBucket: "user-email-password-auth-3cae8.firebasestorage.app",
  messagingSenderId: "289914398707",
  appId: "1:289914398707:web:f641caf8f1e56262229486"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;