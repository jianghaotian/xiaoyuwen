import makeActionCreator from './makeActionCreator';

// token
export const SET_TOKEN = 'SET_TOKEN';
export const setToken = makeActionCreator(SET_TOKEN, 'token')

export const SET_UID = 'SET_UID';
export const setUid = makeActionCreator(SET_UID, 'uid');

export const SET_TOKEN_ALL = 'SET_TOKEN_ALL';
export const setTokenAll = makeActionCreator(SET_TOKEN_ALL, 'token', 'uid');

export const CLEAR_TOKEN_ALL = 'CLEAR_TOKEN_ALL'
export const clearTokenAll = makeActionCreator(CLEAR_TOKEN_ALL);


// users

export const SET_USERS = 'SET_USERS';
export const setUsers = makeActionCreator(SET_USERS, 'users');

export const CLEAR_USERS = 'CLEAR_USERS';
export const clearUsers = makeActionCreator(CLEAR_USERS);

export const SET_GRADE = 'SET_GRADE';
export const setGrade = makeActionCreator(SET_GRADE, 'grade');

export const SET_HEAD = 'SET_HEAD';
export const setHead = makeActionCreator(SET_HEAD, 'head');

export const SET_NAME = 'SET_NAME';
export const setName = makeActionCreator(SET_NAME, 'name');

export const SET_SIGNATURE = 'SET_SIGNATURE';
export const setSignature = makeActionCreator(SET_SIGNATURE, 'signature');

export const SET_SEX = 'SET_SEX';
export const setSex = makeActionCreator(SET_SEX, 'sex');

export const SET_BIRTHDAY = 'SET_BIRTHDAY';
export const setBirthday = makeActionCreator(SET_BIRTHDAY, 'birthday');

export const SET_PHONE = 'SET_PHONE'
export const setPhone = makeActionCreator(SET_PHONE, 'phone');

//   调用

// dispatch(addTodo('Use Redux'))