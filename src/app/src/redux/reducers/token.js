import { SET_TOKEN } from '../actions';

export default (state = '', action) => {
    switch (action.type) {
        case SET_TOKEN:
            return action.token;
        default:
            return state;
    }
}
