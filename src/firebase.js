// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
apiKey: "AIzaSyD2V5Bme6YY-YU7p513Cgq6bk_3HuNtVg4",
authDomain: "supportaidnetwork.firebaseapp.com",
projectId: "supportaidnetwork",
storageBucket: "supportaidnetwork.appspot.com",
messagingSenderId: "672852960411",
appId: "1:672852960411:web:2dc858e14c1e3f7b125ab8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);