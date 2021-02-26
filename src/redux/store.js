import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./rootReducer";
import thunk from "redux-thunk" //action에서 dispatch를 리턴해줄 수 있다
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [logger,thunk]; //state 변경시 로그 찍힘

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware))); //spread연산자는 껍데기를 벗긴 나머지값을 가져감

export default store;