
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
"G-VRR6M61L8T"
};

// Initialize Firebase
// We check if an app has already been initialized to prevent errors during hot-reloads.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export the app instance
export { app };
