import firebase from "firebase/app";
import "firebase/storage";
var firebaseConfig = {
  // ここに自分のプロジェクトのconfigをペースト
  apiKey: "AIzaSyCapq-17D1beyIaOF9o38DSnGRub6KyBjI",
  authDomain: "image-uploader-44f75.firebaseapp.com",
  projectId: "image-uploader-44f75",
  storageBucket: "image-uploader-44f75.appspot.com",
  messagingSenderId: "634049131491",
  appId: "1:634049131491:web:9c009ebc65e1a36cb126d6",
  measurementId: "G-BMHSQJ2QD6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;
