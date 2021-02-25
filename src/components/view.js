import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addView} from "../redux/index";  //action


//props 안에는 count, addSubscriber() 존재
const Views = ({count, addView}) => {
    const [number, setNumber] = useState(1);
    return (
        <div class="items">
            <h3>조회수: {count}</h3>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>addView({number})}>조회하기!</button>
        </div>

    );
};
//rootReducer에 전언되어있는 reducer views를 인자로 전달
const mapStateToProps = ({views})=>{
      console.log('view.js ', views);
    return{
        count: views.count
    }
}

const mapDispatchToProps ={
    addView: (number)=>addView(number)
}

export default connect(mapStateToProps,mapDispatchToProps)(Views);
