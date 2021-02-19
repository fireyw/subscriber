import { createStore } from 'redux';
import subReducer from "../components/subscribers/reducer";

const store = createStore(subReducer)

export default store;