import {ADD_SUBSCRIBER, REMOVE_SUBSCRIBER, ADD_SUBNAME} from './types'

const initialState= {
    count: 370,
    name: '테스트'
}
const subReducer = (state=initialState,action )=> {
    console.log('subReducer type: ' + action.type);

    switch(action.type){
        case ADD_SUBSCRIBER:
            console.log('reducer ADD_SUBSCRIBER');
            return{
                ...state,
                count: state.count+1
            }
        case REMOVE_SUBSCRIBER:
            return{
                ...state,
                count: state.count-1
            }
        case ADD_SUBNAME:
            console.log('reducer ADD_SUBNAME');
            return{
                ...state,
                name: state.name
            }
        default: return state
    }
}

export default subReducer;