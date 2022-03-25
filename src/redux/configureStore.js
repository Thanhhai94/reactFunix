import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Staffs } from "./staffs";
import { Depts } from "./department";
import { Salary } from "./salary";
import { StaffDept } from "./StaffDept";

export const ConfigureStore = () => {
    const store = createStore (
        combineReducers({
            staffs: Staffs,
            depts: Depts,
            salary: Salary,
            staffDept: StaffDept
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}
