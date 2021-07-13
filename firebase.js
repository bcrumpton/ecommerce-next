import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCObIFLWeQUbJzAtH_sq54TW0phUXVKSMs',
  authDomain: 'two-a264b.firebaseapp.com',
  projectId: 'two-a264b',
  storageBucket: 'two-a264b.appspot.com',
  messagingSenderId: '741202534991',
  appId: '1:741202534991:web:44068f88ef50c6027b803a',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
