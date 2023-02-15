import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseApp = initializeApp({
    apiKey: "AIzaSyDe5UvmrOTt1vzPPRH2s6wFMmV7bswo9i8",
    authDomain: "source-sketch.firebaseapp.com",
    projectId: "source-sketch",
    storageBucket: "source-sketch.appspot.com",
    messagingSenderId: "154317120456",
    appId: "1:154317120456:web:f7cb0df74cefcb231156fd",
    measurementId: "G-MLNERPPM6Z"
});
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Detect auth state
onAuthStateChanged(auth, user => {
    if (user = null) {
        console.log('logged in!')
    }
    esle {
        console.log('No user')
    }
});