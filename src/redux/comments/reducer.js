import {FETCH_COMMENTS
    ,FETCH_COMMENTS_REQUEST
    ,FETCH_COMMENTS_SUCCESS
    ,FETCH_COMMENTS_FAILURE} from "./types"

const initialState= {
    items : []
}

const commentsReducers = (state=initialState, action) =>{
    switch(action.type){
        default:
            return state;
        // case FETCH_COMMENTS_REQUEST:
        //     return{
        //
        //     }
    }
}

export default commentsReducers;