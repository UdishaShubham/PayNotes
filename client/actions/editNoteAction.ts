import service from "../service/service";
import { ThunkDispatch } from 'redux-thunk';
import { SAVE_NOTE } from "../intefaces";

export function saveEditedNote(note: SAVE_NOTE) {
    return function (dispatch: ThunkDispatch<{}, {}, any>) {
        return service.saveEditedNotes(note).then(() => {
            service.fetchNotes().then((response: any) => {
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

export function toggleEditNote(editNote: boolean) {
    return function (dispatch: ThunkDispatch<{}, {}, any>) {
        dispatch({
            type: "TOGGLE_EDIT_NOTE",
            editNote
        })
    }
}

export function closeModal() {
    return function (dispatch: ThunkDispatch<{}, {}, any>) {
        dispatch({
            type: "CLOSE_MODAL"
        })
    }
}


