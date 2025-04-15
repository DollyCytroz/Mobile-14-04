import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcfop6hkOV1M77GHaryZSTh2jS3QxGPyI",
  authDomain: "mbacesso-ea53b.firebaseapp.com",
  projectId: "mbacesso-ea53b",
  storageBucket: "mbacesso-ea53b.firebasestorage.app",
  messagingSenderId: "233319781261",
  appId: "1:233319781261:web:007167ef520ba58fc423c4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, db}; 