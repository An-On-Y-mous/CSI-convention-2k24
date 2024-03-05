import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT0LlXmZp8DvPM_8Kpn3eMzL2oqZC0HMA",
  authDomain: "convention-2k24.firebaseapp.com",
  projectId: "convention-2k24",
  storageBucket: "convention-2k24.appspot.com",
  messagingSenderId: "1002360770239",
  appId: "1:1002360770239:web:ba47e1cd1ddea7090e000a",
  measurementId: "G-QQWKFMT9X8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
