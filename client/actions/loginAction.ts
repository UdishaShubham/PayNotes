import service from "../service/service";
import { ThunkDispatch } from 'redux-thunk';
import { USER } from "../intefaces";

export function login(user: USER) {
    return function (dispatch: ThunkDispatch<{}, {}, any>) {
        return service.login(user).then(() => {
            dispatch({
                type: "LOGIN"
            })
        })
            .catch((error: any) => {
                dispatch({
                    type: "USER_NOT_FOUND"
                })
                throw (error);
            })
    }
}

export function logout() {
    return function (dispatch: ThunkDispatch<{}, {}, any>) {
        dispatch({
            type: "LOGOUT"
        })
    }
}