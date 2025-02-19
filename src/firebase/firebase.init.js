import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// apiKey: "AIzaSyDSRvdguD3Rnu81cAgwv-UNttPXnYAjCKY",
// authDomain: "task-management-applicat-d6752.firebaseapp.com",
// projectId: "task-management-applicat-d6752",
// storageBucket: "task-management-applicat-d6752.firebasestorage.app",
// messagingSenderId: "474236759269",
// appId: "1:474236759269:web:53b77c51c11e3bba7cf80c"
