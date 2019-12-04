import { SET_UID, SET_USERS } from '../actions';

let noneUsers = {
    name: '',
    signature: '',
    sex: '',
    birthday: '',
    phone: '',
    grade: ''
}

let defaultUsers = JSON.parse(localStorage.getItem("users")) || noneUsers;

export default (state = defaultUsers, action) => {
    let ownState = {...state};

    switch (action.type) {
        case SET_USERS:
            localStorage.setItem("users", JSON.stringify(action.users));
            return action.users;
        default:
            return state;
    }
}

