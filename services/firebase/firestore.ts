import firebase from 'firebase';

import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously} from "firebase/auth";

const firebaseConfig= {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();
const firestore = firebaseApp.firestore();
const analytics = getAnalytics(firebaseApp);

export const collections = Object.freeze({
    shopItems: firestore.collection('shopItems') //as firebase.firestore.CollectionReference<FirebaseProduct>,
});


// export const createGroceryList = (userName, userId) => {
//     const groceriesColRef = collection(db, 'groceryLists')
//     return addDoc(groceriesColRef, {
//             created: serverTimestamp(),
//             createdBy: userId,
//             users: [{ 
//                 userId: userId,
//                 name: userName
//             }]
//         });
// };

// export const getGroceryList = (groceryListId) => {
//     const groceryDocRef = doc(db, 'groceryLists', groceryListId)
//     return getDoc(groceryDocRef);
// };

// export const getGroceryListItems = (groceryListId) => {
//     const itemsColRef = collection(db, 'groceryLists', groceryListId, 'items')
//     return getDocs(itemsColRef)
// }

// export const streamGroceryListItems = (groceryListId, snapshot, error) => {
//     const itemsColRef = collection(db, 'groceryLists', groceryListId, 'items')
//     const itemsQuery = query(itemsColRef, orderBy('created'))
//     return onSnapshot(itemsQuery, snapshot, error);
// };

// export const addUserToGroceryList = (userName, groceryListId, userId) => {
//     const groceryDocRef = doc(db, 'groceryLists', groceryListId)
//     return updateDoc(groceryDocRef, {
//             users: arrayUnion({ 
//                 userId: userId,
//                 name: userName
//             })
//         });
// };

// export const addGroceryListItem = (item, groceryListId, userId) => {
//     return getGroceryListItems(groceryListId)
//         .then(querySnapshot => querySnapshot.docs)
//         .then(groceryListItems => groceryListItems.find(groceryListItem => groceryListItem.data().name.toLowerCase() === item.toLowerCase()))
//         .then( (matchingItem) => {
//             if (!matchingItem) {
//                 const itemsColRef = collection(db, 'groceryLists', groceryListId, 'items')
//                 return addDoc(itemsColRef, {
//                         name: item,
//                         created: serverTimestamp(),
//                         createdBy: userId
//                     });
//             }
//             throw new Error('duplicate-item-error');
//         });
// };