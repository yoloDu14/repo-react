import {ACTION_LOGIN, ACTION_LOGIN_FAILED, ACTION_LOGOUT} from "../action/authAction";

const initialState = {loggingIn: false, token: undefined};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case ACTION_LOGIN:
            return {
                loggingIn: true,
                token : action.token
            };
        case ACTION_LOGIN_FAILED:
            return {
                loggingIn: false,
                message : action.message,
                token : undefined
            };
        case ACTION_LOGOUT:
            return {
                loggingIn: false,
                token : undefined
            };
        default:
            return state
    }
}
