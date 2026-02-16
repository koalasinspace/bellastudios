
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9aydL6i0Hwb0DQUg4KAJ5Io5Mmh9Uedg",
  authDomain: "surveys-61b91.firebaseapp.com",
  projectId: "surveys-61b91",
  storageBucket: "surveys-61b91.firebasestorage.app",
  messagingSenderId: "363450308349",
  appId: "1:363450308349:web:05f5df6896e9d1a1df5094",
  measurementId: "G-VRR6M61L8T"
};

// Initialize Firebase
// We check if an app has already been initialized to prevent errors during hot-reloads.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export the app instance
export { app };
