import { createStore, applyMiddleware } from 'redux';
import rootRecuder from "./rootRecuder";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [logger]; //state 변경시 로그 찍힘

const store = createStore(rootRecuder, composeWithDevTools(applyMiddleware(...middleware))); //spread연산자는 껍데기를 벗긴 나머지값을 가져감

export default store;