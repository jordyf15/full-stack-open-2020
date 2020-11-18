import usersService from '../services/usersService';

const userListReducer=(state=[],action)=>{
    switch(action.type){
        case 'INIT_USERLIST':
            return action.data;
        default: 
            return state;
    }
}

export const initUserList=()=>{
        return async dispatch=>{
            const data= await usersService.getAll();
            dispatch({type: 'INIT_USERLIST',data})
        }
}

export default userListReducer;