import { ACTION_TYPE } from "./actionTypes";

const INITIAL_STATE = {
    users: [],
    selectedUser: {}
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPE.GET_USERS:
            return { ...state, users: action.payload, selectedUser: {} };
        case ACTION_TYPE.GET_USER:
            return { ...state, selectedUser: action.payload };
        case ACTION_TYPE.ADD_USER:
            return { ...state, users: [...state.users, action.payload] };
        case ACTION_TYPE.UPDATE_USER:
            return {
                ...state, users: state.users.map(user => {
                    return (user.id === action.payload.id ? action.payload : user);
                })
            };
        case ACTION_TYPE.DELETE_USER:
            return { ...state, users: state.users.filter(user => user.id !== action.payload) };
        default:
            return state;
    };
};