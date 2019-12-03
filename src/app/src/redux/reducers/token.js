import { SET_TOKEN } from '../actions';

let defaultToken = localStorage.getItem("token") || '';

export default (state = defaultToken, action) => {
    switch (action.type) {
        case SET_TOKEN:
            localStorage.setItem("token", action.token);
            return action.token;
        default:
            return state;
    }
}
