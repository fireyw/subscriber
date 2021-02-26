import React,{useEffect} from 'react';   //useEffect 랜더링후 실행을 위해
import {connect} from 'react-redux'
import {fetchComments} from '../redux/comments/actions'

const Comments = ({fetchComments}) => {  //props안에 들어있는 fetchComments 만사용
    useEffect(()=>{
        fetchComments()
    }, []);//1번만 실행되도록
    return (
        <div class="items">
            
        </div>
    );
};
const mapStateToProps = ({state})=>{
    return {
        comments:state.comments.items
    }
}
const mapDispatchToProps={
    fetchComments
}

export default connect(mapStateToProps,mapDispatchToProps)(comments);
