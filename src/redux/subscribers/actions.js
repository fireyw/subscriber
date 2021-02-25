import {ADD_SUBSCRIBER, REMOVE_SUBSCRIBER, ADD_SUBNAME} from './types'


export const addSubscriber =()=>{
    return{
        type:ADD_SUBSCRIBER
    }
}

export const addSubName =(input)=>{
    console.log('action.js addSubName');
    return{
        type:ADD_SUBNAME,
        name: input
    }
}

export const removeSubscribers =()=>{
    return{
        type:REMOVE_SUBSCRIBER
    }
}