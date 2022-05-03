// import * as firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";

// let config = {
//   apiKey: "AIzaSyCfMu4TA1pHZEYdbhmBZNovVRs8xoCQOko",
//   authDomain: "fashionalyty.firebaseapp.com",
//   // databaseURL: "https://bezkoder-firebase.firebaseio.com",
//   projectId: "fashionalyty",
//   storageBucket: "fashionalyty.appspot.com",
//   messagingSenderId: "560441560123",
//   appId: "1:560441560123:web:141451af72234b84a9a01e",
// };

// firebase.initializeApp(config);

// export default firebase.firestore();

// const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_FIREBASE_MESSAGE_SENDER_ID,
  // appId: process.env.REACT_FIREBASE_APP_ID
// })



// export const db = app.firestore();

// export const auth = app.auth()
// export default app

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: "fashionalyty",
  storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_FIREBASE_APP_ID
};

let app;

if (firebase.default.apps.length === 0) {
  console.log("firebase init");
  app = firebase.default.initializeApp(firebaseConfig);
} else {
  app = firebase.default.app();
}

const db = app.firestore();
const auth = firebase.default.auth();

export { db, auth, app, firebaseConfig };