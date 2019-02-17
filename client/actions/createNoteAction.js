import service from "../service/service";

export function openCreateModel() {
    return function (dispatch) {
        dispatch({
            type: "OPEN_CREATE_MODAL"
        })
    }
}

export function createNote(note) {
    return function (dispatch) {
        return service.createNote(note).then(() => {
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