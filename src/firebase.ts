import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
	apiKey: 'AIzaSyBoyTnEWSbvmIhDqQUboA07Jbxo5Ny77p4',
  authDomain: 'facebook-messenger-clone-ea9b1.firebaseapp.com',
  projectId: 'facebook-messenger-clone-ea9b1',
  storageBucket: 'facebook-messenger-clone-ea9b1.appspot.com',
  messagingSenderId: '901140786446',
  appId: '1:901140786446:web:c78151f04963532ed33b5f',
  measurementId: 'G-SZKDV5L755',
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const analytics = getAnalytics(app);

export const auth = getAuth(app);
