// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvBrfe3XJhCh1Z0SXhQIrrRyMZjFvfw88",
  authDomain: "fir-auth-29632.firebaseapp.com",
  projectId: "fir-auth-29632",
  storageBucket: "fir-auth-29632.appspot.com",
  messagingSenderId: "239990630724",
  appId: "1:239990630724:web:14f37989f98ead0443cf11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const db = getFirestore(app)

export const storage = getStorage(app);

export const notesColRef = collection(db, 'notes');

// getDocs(colRef)
// .then(snapshot => {
//     const notes = []
//     snapshot.docs.forEach(doc => {
//       notes.push({
//         ...doc.data(),
//         id: doc.id
//       })
//       //console.log(doc.data(), doc.id);
//     });
//     console.log(notes);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//For Real time data updates
// onSnapshot(colRef, (snapshot) => {
//   const notes = [];
//   snapshot.docs.forEach(doc => {
//     notes.push({
//       ...doc.data(),
//       id: doc.id
//     })
//     //console.log(doc.data(), doc.id);
//   });
//   console.log(notes);
// })

// Get a single document
// const docRef = doc(colRef, "mCWBMpiAGAt4u1YP6M5f");
// getDoc(docRef)
// .then(doc => {
//   console.log(doc.data(), doc.id);
// })
// .catch(err => {
//   console.log(err);
// });

// Add a document
// addDoc(colRef, {
//   title: 'Test',
//   content: 'Test Content',
//   user: {
//     id: '123',
//     name: 'John Doe'
//   }
// })
// .then(doc => {
//   console.log(doc.data(), doc.id);
// })
// .catch(err => {
//   console.log(err);
// });

// Update a document
// updateDoc(docRef, {
//   title: 'Updated Test',
//   content: 'Updated Test Content',
//   user: {
//     id: '123642',
//     name: 'John Doe2'
//   }
// })
// .then(doc => {
//   console.log(doc.data(), doc.id);
// })
// .catch(err => {
//   console.log(err);
// });

// Delete a document
// deleteDoc(docRef)
// .then(doc => {
//   console.log("Deleted");
// })
// .catch(err => {
//   console.log(err);
// });

// Query a collection
// const queriedData = query(colRef, where('user.id', '==', '123'))
// onSnapshot(queriedData, (snapshot) => {
//   const notes = [];
//   snapshot.docs.forEach(doc => {
//     notes.push({
//       ...doc.data(),
//       id: doc.id
//     })
//     //console.log(doc.data(), doc.id);
//   });
//   console.log(notes);
// })
