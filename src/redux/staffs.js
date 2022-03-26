import * as ActionTypes from './ActionTypes';

export const Staffs = ( state = {
    isLoading: true,
    errMess: null,
    staffs: [],
}, action ) => {
    switch(action.type) {
        case ActionTypes.STAFFS_LOADING:
            return {...state, isLoading: true, errMess: null, staffs: []};
        case ActionTypes.STAFFS_FAILED:
            return{...state, isLoading: false, errMess: action.payload};
        case ActionTypes.ADD_STAFFS:
            return{...state, isLoading: false, errMess: null, staffs: action.payload}
        case ActionTypes.ADD_NEW_STAFF :
            var newStaff = action.payload
            newStaff.id = state.staffs.length
            return {...state, staffs: [...state.staffs, newStaff]}
        default:
            return state
    }
}