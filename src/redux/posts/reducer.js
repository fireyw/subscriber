import {FETCH_POSTS
    ,FETCH_POSTS_REQUEST
    ,FETCH_POSTS_SUCCESS
    ,FETCH_POSTS_FAILURE} from "./types"

const initialState= {
    items : [],
    loading : false,
    err: null
}

const commentsReducers = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_POSTS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_POSTS_SUCCESS:
            return{
                ...state,
                items:action.payload,
                loading:false
            }
        case FETCH_POSTS_FAILURE:
            return{
                ...state,
                items:action.payload,
                loading:false
            }

        default:
            return state;
    }
}

export default commentsReducers;