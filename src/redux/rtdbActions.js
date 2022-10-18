import { child, get, ref, remove, set, update } from "firebase/database";
import StartFirebase from "../config/realtime-config";
import { ACTION_TYPE } from "./actionTypes";

const db = StartFirebase();

export const getUsers = () => {
    return async (dispatch) => {
        const userRef = ref(db, 'users');
        try {
            let users = [];
            const snapshot = await get(userRef);
            if (snapshot.exists()) users = Object.values(snapshot.val());
            dispatch({ type: ACTION_TYPE.GET_USERS, payload: users });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getOneUser = (id) => {
    return async (dispatch) => {
        const dbRef = ref(StartFirebase());
        try {
            const snapshot = await get(child(dbRef, `users/${id}`));
            if (snapshot.exists()) {
                dispatch({ type: ACTION_TYPE.GET_USER, payload: snapshot.val() });
                return snapshot.val();
            } else {
                alert("No data available about this user");
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const addUser = (user) => {
    return async (dispatch) => {
        const toSave = {
            id: Number(new Date()),
            ...user
        };
        try {
            await dispatch({ type: ACTION_TYPE.ADD_USER, payload: toSave });
            set(ref(db, 'users/' + toSave.id), toSave);
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateUser = (user) => {
    return async (dispatch) => {
        const updatedData = {
            email: user.email,
            name: user.name
        };
        try {
            await dispatch({ type: ACTION_TYPE.UPDATE_USER, payload: user });
            update(ref(db, 'users/' + user.id), updatedData);
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteUser = (id) => {
    return async (dispatch) => {
        try {
            await dispatch({ type: ACTION_TYPE.DELETE_USER, payload: id });
            remove(ref(db, 'users/' + id));
        } catch (error) {
            console.log(error);
        }
    };
};