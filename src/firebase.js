import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_fsk9hD3D8rsTOqYglSriJk2G8h8zh-A",
  authDomain: "bee-vue-app.firebaseapp.com",
  projectId: "bee-vue-app",
  storageBucket: "bee-vue-app.appspot.com",
  messagingSenderId: "592612086878",
  appId: "1:592612086878:web:738658d30916f7b9a510cf",
  measurementId: "G-F3YYT3NMTG"
};
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
