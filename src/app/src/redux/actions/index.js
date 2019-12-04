import makeActionCreator from './makeActionCreator';





// token
export const SET_TOKEN = 'SET_TOKEN';

export const setToken = makeActionCreator(SET_TOKEN, 'token')



// users

export const SET_UID = 'SET_UID';
export const SET_USERS = 'SET_USERS';


export const setUid = makeActionCreator(SET_UID, 'uid');
export const setUsers = makeActionCreator(SET_USERS, 'users');









//   调用

// dispatch(addTodo('Use Redux'))