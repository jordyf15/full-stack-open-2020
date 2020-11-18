import {combineReducers, createStore,applyMiddleware} from 'redux'
import notifMessageReducer from './reducers/notifMessageReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import blogsReducer from './reducers/blogsReducer';
import userReducer from './reducers/userReducer';
import userListReducer from './reducers/userListReducer';

const reducer=combineReducers({
    notifMessage: notifMessageReducer,
    blogs: blogsReducer,
    user: userReducer,
    userList: userListReducer
})
const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;