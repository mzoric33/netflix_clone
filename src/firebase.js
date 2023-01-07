import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHVGz70ua88swrP80yf_wFtau1ITmMnoQ",
  authDomain: "netflix-clone-50c03.firebaseapp.com",
  projectId: "netflix-clone-50c03",
  storageBucket: "netflix-clone-50c03.appspot.com",
  messagingSenderId: "471196221048",
  appId: "1:471196221048:web:e722ce69a936bc1610b78d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
