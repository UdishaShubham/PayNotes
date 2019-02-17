import service from "../service/service";

export function saveEditedNote(note) {
    return function (dispatch) {
        return service.saveEditedNotes(note).then(() => {
            service.fetchNotes().then(response => {
                dispatch({
                    type: "FETCH_NOTES",
                    notes: response.data
                })
                dispatch({
                    type: "CLOSE_MODAL"
                })
            })
        })
            .catch(error => {
                throw (error);
            })
    }
}

export function toggleEditNote(editNote) {
    return function (dispatch) {
        dispatch({
            type: "TOGGLE_EDIT_NOTE",
            editNote
        })
    }
}

export function closeModal() {
    return function (dispatch) {
        dispatch({
            type: "CLOSE_MODAL"
        })
    }
}


