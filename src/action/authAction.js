
import {login} from "../service/api"

export const ACTION_LOGIN = "ACTION_LOGIN"
export const ACTION_LOGOUT = "ACTION_LOGOUT"
export const ACTION_LOGIN_FAILED = "ACTION_LOGIN_FAILED"
export const authAction = {
    loginAction,
    logoutAction,
};

function loginAction(username, password) {
    return dispatch => {
        login(username,password)
            .then(function(token) {
                dispatch({
                    type: ACTION_LOGIN,
                    token: token
                });
            })
            .catch(function (message) {
                dispatch({
                    type: ACTION_LOGIN_FAILED,
                    message: message
                });
            });
    };
}

function logoutAction() {
    return { type: ACTION_LOGOUT};
}
