let defaultUsers = {



}

export default users = (state = defaultUsers, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}
