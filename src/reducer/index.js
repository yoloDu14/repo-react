import {combineReducers} from "redux";
import {authentication} from "./authenticationReducer";

export const rootReducer = combineReducers({
    authentication
});
