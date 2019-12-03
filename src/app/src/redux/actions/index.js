import makeActionCreator from './makeActionCreator';





// token
export const SET_TOKEN = 'SET_TOKEN';

export const setToken = makeActionCreator(SET_TOKEN, 'token')



// users

export const SET_USERS = 'SET_USERS';


export const setUsers = makeActionCreator(SET_USERS, 'users');









//   调用

// dispatch(addTodo('Use Redux'))