// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  setPersistence, 
  browserLocalPersistence 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXw0rp6KAnCRIVotMNjtrRtBWWklfOyUY",
  authDomain: "video-79c4b.firebaseapp.com",
  projectId: "video-79c4b",
  storageBucket: "video-79c4b.appspot.com",
  messagingSenderId: "1056336360645",
  appId: "1:1056336360645:web:f14b935b203a5917cdecac",
  measurementId: "G-JY5JQ91297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export reusable instances
export const auth = getAuth(app);

// Biar user tetap login walaupun reload/close tab
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error("Persistence error:", error);
  });

export const db = getFirestore(app);
export const storage = getStorage(app);
export { app };
