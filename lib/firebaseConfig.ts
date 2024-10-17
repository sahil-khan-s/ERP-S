import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCdBMrDaz5b-NVZsDLyYzR4G7LCe1UkInY",
  authDomain: "epr-s-52978.firebaseapp.com",
  projectId: "epr-s-52978",
  storageBucket: "epr-s-52978.appspot.com",
  messagingSenderId: "92465644270",
  appId: "1:92465644270:web:a690c37bd5609839a429ff"
};

const app = initializeApp(firebaseConfig);
const storage =getStorage(app)
export {storage}