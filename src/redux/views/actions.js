import {ADD_VIEW} from "./types";

export const addView = (number)=>{
    console.log('action.js ', number);
    return {
        type: ADD_VIEW,
        payload: Number(number)
    }
}
