import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ContactReducer from './Redux/Reducer/ContactReducer';

const store = createStore(ContactReducer, composeWithDevTools());

export default store;
