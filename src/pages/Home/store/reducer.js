import {fromJS} from "immutable";

const initialState = fromJS([1,2,3,4,5]);

export const home = (state=initialState, action)=>{
    switch(action.type){
        case 'update':
            return state.push(action.data);
        default:
            return state
    }
};
