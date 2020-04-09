const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';


const initialState = {
    isAuthenticated: false,
    token: null
};

const loginReducer= (state = initialState, action:any) => {
    switch (action.type) {
        case 'LOGIN_USER':
            
            return {
                token: action.payload,
                isAuthenticated: true
            };
        case 'LOGOUT_ERR':

            return {
                token: action.payload,
                isAuthenticated: initialState
            };
        case 'LOGOUT_USER':
          
            return {
                token: action.payload,
                isAuthenticated: initialState
            };
        default:
            return state;
    }
}

/*const loginReducer =(state =false, action:any) => {
    switch (action.type) {

        case 'SET_LOGIN_Load':
            return state;

        case 'SET_LOGIN_SUCCESS':
            return !!state;

        case 'SET_LOGIN_ERROR':
            return state;

        default:
            return state;
    }
}*/
//const loginReducer = () => (state = {
//    isLoginPending: false,
//    isLoginSuccess: false,
//    loginError: null
//}, action: { type: any; isLoginPending: boolean; isLoginSuccess: boolean; loginError: any; }) => {
//    switch (action.type) {
//        case SET_LOGIN_PENDING:
//            return Object.assign({}, state, {
//                isLoginPending: action.isLoginPending
//            });
//        case SET_LOGIN_SUCCESS:
//            return Object.assign({}, state, {
//                isLoginSuccess: action.isLoginSuccess
//            });

//        case SET_LOGIN_ERROR:
//            return Object.assign({}, state, {
//                loginError: action.loginError
//            });

//        default:
//            return state;
//    }
//}


export default loginReducer;