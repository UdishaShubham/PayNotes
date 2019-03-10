import service from "../service/service";
import { NOTE } from "../intefaces";

export function saveEditedNote(note: NOTE) {
    return function (dispatch: any) {
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
    return function (dispatch: any) {
        dispatch({
            type: "TOGGLE_EDIT_NOTE",
            editNote
        })
    }
}

export function closeModal() {
    return function (dispatch: any) {
        dispatch({
            type: "CLOSE_MODAL"
        })
    }
}


