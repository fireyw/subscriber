import {combineReducers} from "redux";
import subReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";
import commentsReducers from "./comments/reducer";

//mapStateToProps 에 해당 인자 전달
const rootReducer = combineReducers({
    views: viewsReducer,
    subscribers: subReducer,
    comments:commentsReducers
})

export default rootReducer;