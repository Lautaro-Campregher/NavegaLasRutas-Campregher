import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfHsCObqDpRw1_r4D4QiWSdskscxgC2t8",
  authDomain: "mi-e-commerce-a38ff.firebaseapp.com",
  projectId: "mi-e-commerce-a38ff",
  storageBucket: "mi-e-commerce-a38ff.firebasestorage.app",
  messagingSenderId: "534681152048",
  appId: "1:534681152048:web:b7586b83e9a89a979f5bf5",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
