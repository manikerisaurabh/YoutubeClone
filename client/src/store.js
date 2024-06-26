// store.js
import { createStore } from 'redux';
import rootReducer from './Reducers/auth';

const store = createStore(rootReducer);

export default store;
