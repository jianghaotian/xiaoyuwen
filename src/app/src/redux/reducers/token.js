import { SET_UID, SET_USERS } from '../actions';
import { SET_TOKEN } from '../actions';

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
            return action.token;
        case SET_UID:
            ownState.id = action.uid;
            localStorage.setItem("uid", action.uid);
            return ownState;



        default:
            return state;
    }
}
