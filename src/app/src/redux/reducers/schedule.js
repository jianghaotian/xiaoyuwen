import { SET_TOKEN } from '../actions';

let defaultSchedule = {
    pk: 0,
    pt: 0,
    cj: 0,
    cc: 0,
    sb: 0,
    apk: 0,
    apt: 0,
    acj: 0,
    acc: 0,
    asb: 0
}

export default (state = defaultSchedule, action) => {
    let ownState = {...state};
    switch (action.type) {
        case 'SET_TOKEN':

            return action.filter
        default:
            return state
    }
}

