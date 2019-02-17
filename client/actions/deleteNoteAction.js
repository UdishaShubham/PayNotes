import service from "../service/service";

export function deleteNote(id) {
    return function (dispatch) {
        return service.deleteNote(id).then(() => {
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
