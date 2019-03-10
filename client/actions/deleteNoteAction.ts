import service from "../service/service";

export function deleteNote(id: String) {
    return function (dispatch: any) {
        return service.deleteNote(id).then(() => {
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
