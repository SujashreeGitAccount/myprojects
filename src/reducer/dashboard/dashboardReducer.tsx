//const SET_DASHBOARD_ERROR = 'SET_DASHBOARD_ERROR';
//const SET_DASHBOARD_SUCCESS = 'SET_DASHBOARD_SUCCESS';



//const dashboardReducer = () => (
//    state = {
//    isDashboardSuccess: false,
//    dashboardError: null
//    },
//    action: { type: any; isDashboardSuccess: boolean; dashboardError: any; }) => {
//    switch (action.type) {
        
//        case SET_DASHBOARD_SUCCESS:
//            return Object.assign({}, state, {
//                isDashboardSuccess: action.isDashboardSuccess
//            });

//        case SET_DASHBOARD_ERROR:
//            return Object.assign({}, state, {
//                dashboardError: action.dashboardError
//            });

//        default:
//            return state;
//    }
//}

const dashboardReducer = (state = false, action: any) => {
    switch (action.type) {
        case 'SET_DASHBOARD_SUCCESS':
            return !state;
        default:
            return state;
    }

}
export default dashboardReducer;