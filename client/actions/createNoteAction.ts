import service from "../service/service";
import { NOTE } from "../intefaces";

export function openCreateModel() {
    return function (dispatch: any) {
        dispatch({
            type: "OPEN_CREATE_MODAL"
        })
    }
}

export function createNote(note: NOTE) {
    return function (dispatch: any) {
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
