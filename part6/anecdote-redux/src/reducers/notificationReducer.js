let idTimeout;
const notificationReducer=(state=null,action)=>{
    switch(action.type){
        case 'HIDE_NOTIF':
            return null;
        case 'SET_NOTIF':
            return action.message;
        default:
            return state
    }
}

export const setNotification=(notification,time)=>{
    console.log('time hide',time);
    return async(dispatch)=>{
        dispatch({
            type: 'SET_NOTIF',
            message: notification
        })
        clearTimeout(idTimeout)
        idTimeout=setTimeout(()=>{
            dispatch({
                type: 'HIDE_NOTIF'
            })
        },time*1000)
        console.log('timeout id',idTimeout)
    }
}


export default notificationReducer;

