import {FETCH_POSTS
    ,FETCH_POSTS_REQUEST
    ,FETCH_POSTS_SUCCESS
    ,FETCH_POSTS_FAILURE} from "./types"

export const fetchPostsSuccess = (posts)=>{
    return{
        type:FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchPostsFailure = (error)=>{
    return{
        type:FETCH_POSTS_FAILURE,
        payload: error
    }
}

export const fetchPostsRequest = ()=>{
    return{
        type:FETCH_POSTS_REQUEST
    }
}


export const fetchPosts = ()=>{
    return(dispatch)=>{
        dispatch(fetchPostsRequest()); //dispatch 로 action 실행
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(posts => dispatch(fetchPostsSuccess(posts)))
            .catch(error => dispatch(fetchPostsFailure(error)))
    }
}