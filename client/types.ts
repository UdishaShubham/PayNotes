import { FETCH_NOTE } from './intefaces';

export const OPEN_CREATE_MODAL = "OPEN_CREATE_MODAL";
export const FETCH_NOTES = "FETCH_NOTES";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const TOGGLE_EDIT_NOTE = "TOGGLE_EDIT_NOTE";
export const SET_SELECTED_NOTE = "SET_SELECTED_NOTE";
export const LOGIN = "LOGIN";
export const USER_NOT_FOUND = "USER_NOT_FOUND";
export const LOGOUT = "LOGOUT";

interface openCreateModalAction {
    type: typeof OPEN_CREATE_MODAL;
}

interface fetchNotesAction {
    type: typeof FETCH_NOTES;
    notes: FETCH_NOTE[];
}

interface closeModalAction {
    type: typeof CLOSE_MODAL;
}

interface toggleEditNoteAction {
    type: typeof TOGGLE_EDIT_NOTE;
    editNote: boolean;
}

interface setSelectedNoteAction {
    type: typeof SET_SELECTED_NOTE;
    id: string;
}

interface loginAction {
    type: typeof LOGIN;
}

interface userNotFoundAction {
    type: typeof USER_NOT_FOUND;
}

interface logoutAction {
    type: typeof LOGOUT;
}

export type ACTIONS = openCreateModalAction | fetchNotesAction | closeModalAction | 
    toggleEditNoteAction | setSelectedNoteAction | loginAction | userNotFoundAction | logoutAction ;