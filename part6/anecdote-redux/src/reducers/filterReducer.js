const filterReducer=(state='',action)=>{
    switch(action.type){
        case 'filter':
            return action.filter;
        default:
            return state;
    }
}

export const changeFilter=(filter)=>{
    return({
        type: 'filter',
        filter
    })
}

export default filterReducer;