// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "ТВОЙ_API_КЛЮЧ",
  authDomain: "frozekino.firebaseapp.com",
  projectId: "frozekino",
  storageBucket: "frozekino.appspot.com",
  messagingSenderId: "623641197890",
  appId: "1:623641197890:web:6675b451e5c05a69319cdb",
  measurementId: "G-8NPR6RLHFZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
