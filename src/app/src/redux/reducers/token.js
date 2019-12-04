import { SET_UID, CLEAR_TOKEN_ALL } from '../actions';
import { SET_TOKEN, SET_TOKEN_ALL } from '../actions';

let defaultToken = localStorage.getItem("token") || '';
let defaultUid = localStorage.getItem("uid") || '';

let defaultState = {
    token: defaultToken,
    uid: defaultUid
}

export default (state = defaultState, action) => {
    let ownState = {...state};

    switch (action.type) {
        case SET_TOKEN:
            ownState.token = action.token;
            localStorage.setItem("token", action.token);
            return ownState;
        case SET_UID:
            ownState.id = action.uid;
            localStorage.setItem("uid", action.uid);
            return ownState;
        case SET_TOKEN_ALL:
            ownState = {
                token: action.token,
                uid: action.uid
            }
            localStorage.setItem("token", action.token);
            localStorage.setItem("uid", action.uid);
            return ownState;
        case CLEAR_TOKEN_ALL:
            let noneState = {
                token: '',
                uid: ''
            }
            localStorage.setItem("token", '');
            localStorage.setItem("uid", '');
            return noneState;
        default:
            return state;
    }
}
