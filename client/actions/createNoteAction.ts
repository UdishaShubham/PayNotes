import service from "../service/service";
import { SAVE_NOTE } from "../intefaces";
import { ThunkDispatch } from 'redux-thunk';

export function openCreateModel() {
    return function (dispatch: ThunkDispatch<{}, {}, any>) {
        dispatch({
            type: "OPEN_CREATE_MODAL"
        })
    }
}

export function createNote(note: SAVE_NOTE) {
    return function (dispatch: ThunkDispatch<{}, {}, any>) {
        return service.createNote(note).then(() => {
            service.fetchNotes().then((response : any) => {
                dispatch({
                    type: "FETCH_NOTES",
                    notes: response.data
                })
                dispatch({
                    type: "CLOSE_MODAL"
                })
            })
        })
            .catch((error: any) => {
                throw (error);
            })
    }
}
