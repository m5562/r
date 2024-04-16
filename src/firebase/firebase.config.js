import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBu1FAo-41kXUta9AQ7oyKBAKPYCnz7u4k",
  authDomain: "premium-buckeye-384708.firebaseapp.com",
  projectId: "premium-buckeye-384708",
  storageBucket: "premium-buckeye-384708.appspot.com",
  messagingSenderId: "43796656120",
  appId: "1:43796656120:web:bd832f79f84c3c6160700d",
  measurementId: "G-BK27S48QWV",
};

const app = initializeApp(firebaseConfig);

export { app };
