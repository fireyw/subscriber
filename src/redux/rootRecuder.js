import {combineReducers} from "redux";
import subReducer from "./subscribers/reducer";
import viewsReducer from "./subscribers/reducer";

const rootReducer = combineReducers({
    views: viewsReducer,
    subscribers: subReducer
})

export default rootReducer;