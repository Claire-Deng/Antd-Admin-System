export const update=()=>{
    return dispatch=>{
        const action = {
            type:'update',
            data:5
        };
        dispatch(action);

    }
};
