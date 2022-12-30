import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDb71WiJnHLqvMwe4CkLh8KfdIA32wGO6E",
  authDomain: "meet-dns.firebaseapp.com",
  projectId: "meet-dns",
  storageBucket: "meet-dns.appspot.com",
  messagingSenderId: "1089931230704",
  appId: "1:1089931230704:web:9e3fd8f09747e01350f135"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
