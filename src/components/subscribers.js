import React from 'react';
import {connect} from 'react-redux';
import {addSubscriber, addSubName} from "../redux/index";  // ../redux라고 써도 index는 자동인식됨

const handleChange = () => {
    addSubName();
}

//props 안에는 count, addSubscriber() 존재 props.count쓰기 귀찮아서 props 대신 count, addSubscriber 로 변경
const Subscribers = ({count, name, addSubscriber, addSubName}) => {

    return (
        <div class="items">
            <h3>구독자수: {count}</h3>
            <button onClick={()=>addSubscriber()}>구독하기!</button>
            <button onClick={()=>addSubName()}>이름테스트</button>
            <input type="text" onChange={handleChange}></input>
        </div>
    );
};

const mapStateToProps = ({subscribers})=>{
     // console.log(subscribers, 'state');
    return{
        count: subscribers.count,
        name: subscribers.name
    }
}
//es6에서 property 와 값이 같으면 하나로 생략가능 addSubscriber:addSubscriber->addSubscriber
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }

const mapDispatchToProps = {
    addSubscriber:addSubscriber,
    addSubName:addSubName

}

export default connect(mapStateToProps,mapDispatchToProps)(Subscribers);  //1번째 인자 state, 2번째 인자 action 발생  subscribers 컴포넌트가 store에 접근가능하도록

