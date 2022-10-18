// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const StartFirebase = () => {
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

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    return getDatabase(app);
};

export default StartFirebase;