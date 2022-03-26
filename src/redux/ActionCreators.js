import { STAFFS } from '../shared/staffs';
import * as ActionTypes from './ActionTypes';
import { baseUrl } from './baseURL';


export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));
    return fetch(baseUrl + 'staffs')
            .then(response => response.json())
            .then(staffs =>dispatch(addStaffs(staffs)))
}

export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
})

export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
})

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
})

export const fetchDepts = () => (dispatch) => {
    dispatch(deptsLoading(true));
    return fetch(baseUrl + 'departments')
            .then(response => response.json())
            .then(depts =>dispatch(addDepts(depts)))
}

export const deptsLoading = () => ({
    type: ActionTypes.DEPTS_LOADING
})

export const deptsFailed = (errmess) => ({
    type: ActionTypes.DEPTS_FAILED,
    payload: errmess
})

export const addDepts = (depts) => ({
    type: ActionTypes.ADD_DEPTS,
    payload: depts
})

export const fetchSalary = () => (dispatch) => {
    dispatch(salaryLoading(true));
    return fetch(baseUrl + 'staffsSalary')
            .then(response => response.json())
            .then(salary =>dispatch(addSalary(salary)))
}

export const salaryLoading = () => ({
    type: ActionTypes.SALARY_LOADING
})

export const salaryFailed = (errmess) => ({
    type: ActionTypes.SALARY_FAILED,
    payload: errmess
})

export const addSalary = (salary) => ({
    type: ActionTypes.ADD_SALARY,
    payload: salary
})

export const getDeptId = (deptId) => {
    return {
        type: ActionTypes.GET_DEPTID,
        payload: deptId
    }
}

export const fetchStaffDept = (deptID) => (dispatch) => {
    console.log("Action"+deptID);
    return fetch(baseUrl + 'departments/'+deptID)
            .then(response => response.json())
            .then(staffDept =>dispatch(addStaffDept(staffDept)))
}

export const addStaffDept = (staffDept) => {
    return {
        type: ActionTypes.ADD_DEPTSTAFF,
        payload: staffDept
    }
} 


export const addNewStaff = (newStaff) => {
    return {
        type: ActionTypes.ADD_NEW_STAFF,
        payload: newStaff
    }
}
export const postNewStaff = (value) => (dispatch) => {
    const newStaff ={
        annualLeave: value.annualLeave ,
        dOB: value.dOB,
        department: value.department,
        name: value.name,
        overTime: value.overTime,
        salaryScale: value.salaryScale,
        startDate: value.startDate,
    }
    newStaff.image = "/assets/images/alberto.png"
    

    return fetch(baseUrl + 'staffs', {
        method: "POST",
        body: JSON.stringify(newStaff),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addNewStaff(response)))
    .catch(error =>  { console.log('add new Staff', error.message); alert('Your staff could not be posted\nError: '+error.message); });

}