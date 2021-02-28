import React,{useEffect} from 'react';   //useEffect 랜더링후 실행을 위해
import {connect} from 'react-redux'
import {fetchPosts} from '../redux'  //index.js 모든 action 모아놓음


//궁금사항 props가 어느시점에 넘어오는지 모르겠다 ->첫 dom 생성 후 랜더링 될때마다 호출되는거 같다
const Comments = ({fetchPosts, loading, posts}) => {  //props안에 들어있는 fetchPosts 만사용
    useEffect(()=>{
        fetchPosts()
    }, []) //랜더링 후 fetchPosts 함수 1번만 실행되도록
    const postsItems= loading ? (<div>is loading</div>):
        //By ternary condition:
        posts.map(post=>{
            return post.id<5 ?
            (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                ):
            false
            }
        )

    return (
        <div class="posts">
            {postsItems}
        </div>
    )
}

//rootReducer에 매핑된 posts 가져옴
const mapStateToProps = ({posts})=>{
    return {
        posts: posts.items
    }
}
const mapDispatchToProps={
    fetchPosts
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments);
