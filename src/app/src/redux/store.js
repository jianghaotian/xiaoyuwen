import { createStore } from 'redux';
import xywApp from './reducers';

let store = createStore(xywApp);

export default store;