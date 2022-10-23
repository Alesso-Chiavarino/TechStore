import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZzZClKMol2xgNG9MdpmzAcyErvoVCM24",
  authDomain: "techstore-89be8.firebaseapp.com",
  projectId: "techstore-89be8",
  storageBucket: "techstore-89be8.appspot.com",
  messagingSenderId: "92810811490",
  appId: "1:92810811490:web:4ef94acacabee9e28f593b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);