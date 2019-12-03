import { SET_USERS } from '../actions';

let noneUsers = {
    id: '',
    name: '',
    signature: '',
    sex: '',
    birthday: '',
    phone: '',
    grade: ''
}

let defaultUsers = localStorage.getItem("users") || noneUsers;

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
