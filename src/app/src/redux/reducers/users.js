import { SET_USERS } from '../actions';

let defaultUsers = {
    id: '',
    name: '',
    signature: '',
    sex: '',
    birthday: '',
    phone: '',
    grade: ''
}

export default (state = defaultUsers, action) => {
    let ownState = {...state};
    switch (action.type) {
        case SET_USERS:
            return action.users;
        default:
            return state;
    }
}
