
const initialState = {
    data:'123'
};

export const home = (state=initialState, action)=>{
    switch(action.type){
        case 'test1':
            return {...state, data:action.data};
        default:
            return state
    }
};
