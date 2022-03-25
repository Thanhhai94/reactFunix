import * as ActionTypes from './ActionTypes';

export const StaffDept = ( state = {
    isLoading: true,
    errMess: null,
    staffDept: [],
}, action ) => {
    switch(action.type) {
        case ActionTypes.ADD_DEPTSTAFF:
            return{...state, isLoading: false, errMess: null, staffDept: action.payload}
        default:
            return state
    }
}

export const getDeptId =(state = {deptId: ''}, action) => {
    switch(action.type) {
        case ActionTypes.GET_DEPTID:
            return {...state, deptId: action.payload}
        default:
            return state
    }
}