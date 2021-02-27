##React 구현 Component
1. 폴더구조  
+--```src```  
   index.js  (action 통합관리)
   store.js  (redux store)
   rootReducer.js (reducer통합관리 및 mapStateToProps 인자 전달)  
___   +--```component(view관리)```  
___   +--```redux(view별 action,type,reducer)```  
______   +--```comments```  
______   +--```views```  
______   +--```subscribers```  
   
2. Library   
   ~~~
   "react": "^17.0.1",
   "react-dom": "^17.0.1",
   "react-redux": "^7.2.2",
   "react-scripts": "4.0.2",
   "redux": "^4.0.5",
   "redux-devtools-extension": "^2.13.8",
   "redux-logger": "^3.0.6",
   "redux-thunk": "^2.3.0",
   "web-vitals": "^1.0.1"
   
   ex)
   {connect} from 'react-redux'
   { createStore, applyMiddleware } from 'redux';
   thunk from "redux-thunk" //action에서 dispatch를 리턴해줄 수 있다
   logger from 'redux-logger';
   { composeWithDevTools } from 'redux-devtools-extension';
   ~~~

   
    
   
   
    