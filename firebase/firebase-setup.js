import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, s } from '@env';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

let myApp = initializeApp(firebaseConfig);
console.log(firebaseConfig);
export const firestore = getFirestore(myApp);
console.log(module.exports);
