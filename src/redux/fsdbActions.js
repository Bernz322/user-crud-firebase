import { addDoc, getDocs, deleteDoc, collection, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from "../config/firestore-config";
import { ACTION_TYPE } from "./actionTypes";

export const getUsers = () => async (dispatch) => {
    try {
        let users = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach(doc => {
            users.push({ id: doc.id, ...doc.data() });
        });
        dispatch({ type: ACTION_TYPE.GET_USERS, payload: users });
    } catch (error) {
        alert(error);
    }
};

export const getOneUser = (id) => async (dispatch) => {
    try {
        const userRef = doc(db, "users", id);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            dispatch({ type: ACTION_TYPE.GET_USER, payload: userSnap.data() });
            return userSnap.data();
        } else {
            alert("No such document!");
        }

    } catch (error) {
        alert(error);
    }
};

export const addUser = (user) => async (dispatch) => {
    try {
        const res = await addDoc(collection(db, "users"), user);
        const id = res._key.path.segments[1];
        dispatch({ type: ACTION_TYPE.ADD_USER, payload: { ...user, id } });
    } catch (error) {
        alert(error);
    }
};

export const updateUser = (user) => async (dispatch) => {
    const updatedData = {
        email: user.email,
        name: user.name
    };
    try {
        const userToUpdateRef = doc(db, "users", user.id);
        await updateDoc(userToUpdateRef, updatedData);
        dispatch({ type: ACTION_TYPE.UPDATE_USER, payload: user });
    } catch (error) {
        alert(error);
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        await deleteDoc(doc(db, "users", id));
        dispatch({ type: ACTION_TYPE.DELETE_USER, payload: id });
    } catch (error) {
        alert(error);
    }
};