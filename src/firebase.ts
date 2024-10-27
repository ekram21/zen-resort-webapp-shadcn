// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey              : process.env.VITE_FIREBASE_API_KEY,
    authDomain          : process.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL         : process.env.VITE_FIREBASE_DATABASE_URL,
    projectId           : process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket       : process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId   : process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId               : process.env.VITE_FIREBASE_APP_ID,
    measurementId       : process.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app               = initializeApp(firebaseConfig);
const analytics         = getAnalytics(app);
const auth              = getAuth(app);
const database          = getDatabase(app);

export default app
export { auth, database, analytics };
