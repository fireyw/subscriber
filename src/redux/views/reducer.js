import {ADD_VIEW} from "./types";

const initialState = {
    count : 0
}

const viewsReducer =(state=initialState, action)=>{
    console.log('reducer: ', action);
    switch(action.type){ //action안에는 type과 payload존재
        case ADD_VIEW:
            return{
                ...state,
                // count:state.count + action.payload NAN으로나옴
                count:state.count + 5
            }
        default: return state
    }
}

export default viewsReducer;