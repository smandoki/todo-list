import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAnKp46U-kXyIl-A-fuzchm8K4gj-DtpDc',
  authDomain: 'todo-list-7ce13.firebaseapp.com',
  projectId: 'todo-list-7ce13',
  storageBucket: 'todo-list-7ce13.appspot.com',
  messagingSenderId: '1080385251841',
  appId: '1:1080385251841:web:3283a3854cb08f5fd5ee00',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
