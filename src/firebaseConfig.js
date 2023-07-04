// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDq61kJTo5RiGrlPQXpYeteh9bNlrgwKd8",
	authDomain: "serverless-a2-ce43c.firebaseapp.com",
	projectId: "serverless-a2-ce43c",
	storageBucket: "serverless-a2-ce43c.appspot.com",
	messagingSenderId: "935703682800",
	appId: "1:935703682800:web:12c1e44b45018d8cc82c35",
	measurementId: "G-S2HBTLJLR6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

/**
 * // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq61kJTo5RiGrlPQXpYeteh9bNlrgwKd8",
  authDomain: "serverless-a2-ce43c.firebaseapp.com",
  projectId: "serverless-a2-ce43c",
  storageBucket: "serverless-a2-ce43c.appspot.com",
  messagingSenderId: "935703682800",
  appId: "1:935703682800:web:12c1e44b45018d8cc82c35",
  measurementId: "G-S2HBTLJLR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 */
