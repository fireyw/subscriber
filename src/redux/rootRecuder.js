import {combineReducers} from "redux";
import subReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";

const rootReducer = combineReducers({
    views: viewsReducer,
    subscribers: subReducer
})

export default rootReducer;