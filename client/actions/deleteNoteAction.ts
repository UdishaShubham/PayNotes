import { ThunkDispatch } from 'redux-thunk';
import service from "../service/service";

export function deleteNote(id: string) {
    return function (dispatch: ThunkDispatch<{}, {}, any>) {
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
