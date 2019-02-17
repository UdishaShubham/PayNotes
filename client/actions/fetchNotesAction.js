import service from "../service/service";

export function fetchNotes() {
    return function (dispatch) {
        return service.fetchNotes().then(response => {
            dispatch({
                type: "FETCH_NOTES",
                notes: response.data
            })
        })
        .catch(error => {
            throw (error);
        })
    }
}

export function setSelectedNote(id) {
    return function (dispatch) {
        dispatch({
            type: "SET_SELECTED_NOTE",
            id
        })
    }
}
