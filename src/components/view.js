import React from 'react';
import {connect} from 'react-redux';
import {addView} from "../redux/index";  //action


//props 안에는 count, addSubscriber() 존재
const Views = ({count, addView}) => {
    return (
        <div class="items">
            <h3>조회수: {count}</h3>
            <button onClick={()=>addView()}>조회하기!</button>
        </div>

    );
};

const mapStateToProps = ({subscribers})=>{
     console.log(subscribers, 'state');
    return{
        count: subscribers.count
    }
}
//es6에서 property 와 값이 같으면 하나로 생략가능
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }

const mapDispatchToProps ={
    addView
}

export default connect(mapStateToProps,mapDispatchToProps)(Views);
