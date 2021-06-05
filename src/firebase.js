import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDBY7mmmOUvTzN4qtxtJIUzPwdXqUDAB3Y",
  authDomain: "aplikasi-demo-clone.firebaseapp.com",
  projectId: "aplikasi-demo-clone",
  storageBucket: "aplikasi-demo-clone.appspot.com",
  messagingSenderId: "602746713314",
  appId: "1:602746713314:web:15e9221701ad41e6b49abb",
  measurementId: "G-0DSVDGZD85",
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
const providerFB = new firebase.auth.FacebookAuthProvider();
export { auth, provider, storage, providerFB };
export default db;
