
const notifMessageReducer=(state=null,action)=>{
    switch(action.type){
        case 'SET_NOTIF':
            console.log('setnotif',action.data)
            return action.data;
        case 'HIDE_NOTIF':
            return null;
        default:
            return state;
    }
}

export const dispNotif=(data,timeout)=>{
    return dispatch=>{
        dispatch({type: 'SET_NOTIF',data});
        setTimeout(()=>{
            dispatch({type: 'HIDE_NOTIF'});
        },timeout)
    }
}

export default notifMessageReducer;