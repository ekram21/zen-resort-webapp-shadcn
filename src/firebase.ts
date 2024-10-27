// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIKDhzuabGUaO52qtnQokEIpAh-Yt_TSo",
    authDomain: "zen-resort.firebaseapp.com",
    databaseURL: "https://zen-resort-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "zen-resort",
    storageBucket: "zen-resort.appspot.com",
    messagingSenderId: "47411896955",
    appId: "1:47411896955:web:36da7bf642d25bb80138de",
    measurementId: "G-X1Z3YRMMZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, analytics };
