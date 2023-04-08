import {createStore} from 'redux';
import {darkThemeReducer} from './reducer';
const store = createStore(darkThemeReducer);


export default store;