import { SET_USERS, CLEAR_USERS, SET_GRADE, SET_NAME, SET_SIGNATURE, SET_SEX, SET_HEAD, SET_BIRTHDAY } from '../actions';

const noneUsers = {
    name: '',
    signature: '',
    sex: '',
    birthday: '',
    phone: '',
    grade: '',
    head: ''
}

let defaultUsers = JSON.parse(localStorage.getItem("users")) || noneUsers;

// export let headUrl = 'http://localhost:8001/users/headimages/';
export let headUrl = 'https://xyw.htapi.pub/users/headimages/';

export default (state = defaultUsers, action) => {
    let ownState = {...state};

    switch (action.type) {
        case SET_USERS:
            let users = action.users;
            if (users.head !== '') {
                users.head = headUrl + users.head;
            }
            localStorage.setItem("users", JSON.stringify(users));
            return users;
        case CLEAR_USERS:
            localStorage.setItem("users", JSON.stringify(noneUsers));
            return noneUsers
        case SET_GRADE:
            ownState.grade = action.grade;
            localStorage.setItem("users", JSON.stringify(ownState));
            return ownState;
        case SET_HEAD:
            ownState.head = headUrl + action.head;
            localStorage.setItem("users", JSON.stringify(ownState));
            return ownState;
        case SET_NAME:
            ownState.name = action.name;
            localStorage.setItem("users", JSON.stringify(ownState));
            return ownState;
        case SET_SIGNATURE:
            ownState.signature = action.signature;
            localStorage.setItem("users", JSON.stringify(ownState));
            return ownState;
        case SET_SEX:
            ownState.sex = action.sex;
            localStorage.setItem("users", JSON.stringify(ownState));
            return ownState;
        case SET_BIRTHDAY:
            ownState.birthday = action.birthday;
            localStorage.setItem("users", JSON.stringify(ownState));
            return ownState;
        


        default:
            return state;
    }
}

