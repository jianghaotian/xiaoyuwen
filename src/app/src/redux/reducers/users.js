import { SET_USERS, CLEAR_USERS, SET_GRADE } from '../actions';

const noneUsers = {
    name: '',
    signature: '',
    sex: '',
    birthday: '',
    phone: '',
    grade: '',
    image: ''
}

let defaultUsers = JSON.parse(localStorage.getItem("users")) || noneUsers;

export default (state = defaultUsers, action) => {
    let ownState = {...state};

    switch (action.type) {
        case SET_USERS:
            localStorage.setItem("users", JSON.stringify(action.users));
            return action.users;
        case CLEAR_USERS:
            localStorage.setItem("users", JSON.stringify(noneUsers));
            return noneUsers
        case SET_GRADE:
            ownState.grade = action.grade;
            localStorage.setItem("users", JSON.stringify(ownState));
            return ownState;
        default:
            return state;
    }
}

