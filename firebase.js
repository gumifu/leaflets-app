// Import the functions you need from the SDKs you need
import { initializeApp ,getApps,getApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUQWn8GD4xvOKLO-dmm7yT4km8KEZKcpE",
  authDomain: "leaflets-app-220309.firebaseapp.com",
  projectId: "leaflets-app-220309",
  storageBucket: "leaflets-app-220309.appspot.com",
  messagingSenderId: "33365990923",
  appId: "1:33365990923:web:2681b58d4ab67143ed310e",
  measurementId: "G-SHKZDEVFSE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
// const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
