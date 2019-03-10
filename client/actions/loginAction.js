import service from "../service/service";

export function login(user) {
    return function (dispatch) {
        return service.login(user).then(() => {
            dispatch({
                type: "LOGIN"
            })
        })
            .catch(error => {
                dispatch({
                    type: "USER_NOT_FOUND"
                })
                throw (error);
            })
    }
}

export function logout() {
    return function (dispatch) {
        dispatch({
            type: "LOGOUT"
        })
    }
}