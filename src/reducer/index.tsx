import loginReducer from './login/loginReducer';
import dashboardReducer from './dashboard/dashboardReducer';
import counterReducer from './counter/counterReducer';
import { combineReducers } from 'redux';
import contextReducer from './counter/contextReducer';

const allReducers = combineReducers({
    isLogged: loginReducer,
    dashboardData: dashboardReducer,
    counter: counterReducer,
    contextCounter: contextReducer
});
export default allReducers;