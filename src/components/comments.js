import React,{useEffect} from 'react';   //useEffect 랜더링후 실행을 위해
import {connect} from 'react-redux'
import {fetchComments} from '../redux'


//궁금사항 props가 어느시점에 넘어오는지 모르겠다
const Comments = ({fetchComments, loading, comments}) => {  //props안에 들어있는 fetchComments 만사용
    useEffect(()=>{
        fetchComments()
    }, []) //랜더링 후 fetchComments 함수 1번만 실행되도록
    const commentsItems= loading ? (<div>is loading</div>):
        //By ternary condition:
        comments.map(comment=>{
            return comment.id<5 ?
            (
                    <div key={comment.id}>
                        <h3>{comment.name}</h3>
                        <h3>{comment.email}</h3>
                        <h3>{comment.body}</h3>
                    </div>
                ):
            false
            }
        )
        //By if condition:
        // comments.map(comment=>{
        //     if (comment.id < 5) {
        //         return <div key={comment.id}>
        //             <h3>{comment.name}</h3>
        //             <h3>{comment.email}</h3>
        //             <h3>{comment.body}</h3>
        //         </div>
        //     }
        //     return <div>error</div>
        //     }
        // )
    return (
        <div class="comments">
            {commentsItems}
        </div>
    )
}

//rootReducer에 매핑된 comments 가져옴
const mapStateToProps = ({comments})=>{
    return {
        comments: comments.items
    }
}
const mapDispatchToProps={
    fetchComments
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments);
