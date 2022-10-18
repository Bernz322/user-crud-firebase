import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDoKZ0IR26-Tb47YJxW86ZYn6heRwbuGiA",
    authDomain: "users-management-crud.firebaseapp.com",
    databaseURL: "https://users-management-crud-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "users-management-crud",
    storageBucket: "users-management-crud.appspot.com",
    messagingSenderId: "590495540673",
    appId: "1:590495540673:web:fd724eed7cb1c5955a7b40",
    measurementId: "G-VFCNTFXKHH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);