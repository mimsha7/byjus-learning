import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAAdHE8ydUXgS72892QqvNSbNittL9iRxs",
  authDomain: "byjus-learning-a3a2a.firebaseapp.com",
  projectId: "byjus-learning-a3a2a",
  storageBucket: "byjus-learning-a3a2a.appspot.com",
  messagingSenderId: "304243675061",
  appId: "1:304243675061:web:fddd5510a77fb2470213fc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);