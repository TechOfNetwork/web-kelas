// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCA0mP0JJI7osCh0o7LJKilsE9W1JKsF3A",
  authDomain: "techofnetwork-2de39.firebaseapp.com",
  projectId: "techofnetwork-2de39",
  storageBucket: "techofnetwork-2de39.appspot.com",
  messagingSenderId: "971153293549",
  appId: "1:971153293549:web:7bb8a89964245202d5cce4",
  measurementId: "G-XZ40DBBP5D"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();