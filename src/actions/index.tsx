import axios from 'axios';



const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';


const SET_DASHBOARD_ERROR = 'SET_DASHBOARD_ERROR';
const SET_DASHBOARD_SUCCESS = 'SET_DASHBOARD_SUCCESS';


//export const setLoginPending = (isLoginPending: boolean)=> {
//    return {
//        type: SET_LOGIN_PENDING,
//        isLoginPending
//    };
//}

//export const setLoginSuccess=(isLoginSuccess: boolean)=> {
//    return {
//        type: SET_LOGIN_SUCCESS,
//        isLoginSuccess
//    };
//}

//export const setLoginError=(loginError: any) =>{
//    return {
//        type: SET_LOGIN_ERROR,
//        loginError
//    };
//}

/*export const setLoginLoad = () => {
    return {
        type: 'SET_LOGIN_Load'
    };
}

export const setLoginSuccess = () => {
    return {
        type: 'SET_LOGIN_SUCCESS'
    };
}

export const setLoginError = () => {
    return {
        type: 'SET_LOGIN_ERROR'
    };
}*/

/*export function loginUser(username:any, password:any) {
    axios.get("https://localhost:44391/api/Auth?username=" + username + "&password=" + password)
        .then(response => {
            
            console.log(response.data);
            if (response.data !== "Invalid credentials") {
                var token = response.data;
            } else {
               
            }
        })
        .catch(error => {
            
        })
    return {
        type: 'LOGIN_USER',
        payload: token
    };

}*/


export const setLogin = (jwttoken:any) => {
    return {
        type: 'LOGIN_USER',
        payload: jwttoken
    };

}
export const setLoginError = () => {
    return {
        type: 'LOGIN_ERR',
        payload: null
    };

}

export const setLogout = () => {
    return {
        type: 'LOGOUT_USER',
        payload:null
    };
}
//============================DASHBOARD ACTION===========================

export const setDashboardSuccess = () => {
    return {
        type: SET_DASHBOARD_SUCCESS
    };
}

export const setDashboardError = () => {
    return {
        type: SET_DASHBOARD_ERROR
    };
}

//===========================COUNTER ACTION=========================
export const increment = () => {
    return {
        type: 'INCREMENT'
    };
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
}
