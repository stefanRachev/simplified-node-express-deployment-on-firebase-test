import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2CYVSQRhMdcr2u4kVCYCUO26Y7Sqd0Qs",
  authDomain: "test-client-server-db.firebaseapp.com",
  projectId: "test-client-server-db",
  storageBucket: "test-client-server-db.appspot.com",
  messagingSenderId: "659817976712",
  appId: "1:659817976712:web:6fdd4be7ac2e283ed6e03d",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
