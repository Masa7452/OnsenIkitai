import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMnDSEOAx13_fWYDzClEWizKBPUmQKzsM",
  authDomain: "sentou-ikitai-c562b.firebaseapp.com",
  projectId: "sentou-ikitai-c562b",
  storageBucket: "sentou-ikitai-c562b.appspot.com",
  messagingSenderId: "249743310959",
  appId: "1:249743310959:web:ca172a2d49dba2cf114d9a",
  measurementId: "G-WC6S8094L0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const getFirestoreDb = () => 
{
    const db = getFirestore(app);
    return db;
}

export const InitializeFirebaseApp = () => 
{
  initializeApp( firebaseConfig );
}




