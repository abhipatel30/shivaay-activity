import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD2xfXF2LDeglPfBxdN6KCKfHtinOkywvI",
    authDomain: "shivaay-tracker.firebaseapp.com",
    projectId: "shivaay-tracker",
    storageBucket: "shivaay-tracker.firebasestorage.app",
    messagingSenderId: "1054644781317",
    appId: "1:1054644781317:web:418bd54ffc4c6f35fe776c",
    measurementId: "G-BE73ZYYMBB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, orderBy, query };
