import { ThunkDispatch } from 'redux-thunk';
import service from "../service/service";

export function fetchNotes() {
    return function (dispatch: ThunkDispatch<{}, {}, any>) {
        return service.fetchNotes().then((response: any) => {
            dispatch({
                type: "FETCH_NOTES",
                notes: response.data
            })
        })
        .catch((error: any) => {
            throw (error);
        })
    }
}

export function setSelectedNote(id: string) {
    return function (dispatch: ThunkDispatch<{}, {}, any>) {
        dispatch({
            type: "SET_SELECTED_NOTE",
            id
        })
    }
}
