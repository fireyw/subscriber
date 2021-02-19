import React from 'react';
import {connect} from 'react-redux';

const Display = (props) => {
    return (
        <div>
            <p>구독자수 : {props.count}</p>
        </div>
    );
};

const mapStateToProps = (state)=>{
    return {
        count:state.count
    }
}
//Display에 mapStateToProps 인자를 연결한다
export default connect(mapStateToProps)(Display);
