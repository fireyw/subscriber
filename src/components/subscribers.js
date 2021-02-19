import React from 'react';
import {connect} from 'react-redux';
import {addSubscriber} from "./subscribers/actions";


//props 안에는 count, addSubscriber() 존재
const Subscribers = ({count, addSubscriber}) => {
    return (
        <div class="items">
            <h3>구독자수: {count}</h3>
            <button onClick={()=>addSubscriber()}>구독하기!</button>
        </div>

    );
};

const mapStateToProps = (state)=>{
    return{
        count: state.count
    }
}
//es6에서 property 와 값이 같으면 하나로 생략가능
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }

const mapDispatchToProps ={
    addSubscriber
}

export default connect(mapStateToProps,mapDispatchToProps)(Subscribers);
