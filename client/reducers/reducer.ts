import { FETCH_NOTE, INITIAL_STATE } from "../intefaces";
import * as TYPES from '../types';

const selectedNote: FETCH_NOTE = {
    _id: "",
    name: "",
    content: "",
    __v: 0
}

export const initialState: INITIAL_STATE = {
    isLoading: true,
    showModal: false,
    editNote: false,
    isNew: false,
    validUser: false,
    userError: false,
    notes: [],
    selectedNote
}

export default (state = initialState, action: TYPES.ACTIONS) => {
    switch (action.type) {
        case TYPES.FETCH_NOTES:
            return {
                ...state,
                notes: action.notes,
                isLoading: false
            }
        case TYPES.SET_SELECTED_NOTE:
            return {
                ...state,
                selectedNote: state.notes.find((note: FETCH_NOTE) => note._id === action.id),
                showModal: true,
                isNew: false
            }
        case TYPES.CLOSE_MODAL:
            return {
                ...state,
                selectedNote: {},
                showModal: false,
                editNote: false,
                isNew: false
            }
        case TYPES.TOGGLE_EDIT_NOTE:
            return {
                ...state,
                editNote: action.editNote
            }
        case TYPES.OPEN_CREATE_MODAL:
            return {
                ...state,
                selectedNote: {},
                showModal: true,
                isNew: true,
                editNote: true
            }
        case TYPES.LOGIN:
            return {
                ...state,
                validUser: true,
                userError: false
            }
        case TYPES.LOGOUT:
            return {
                ...state,
                validUser: false,
                userError: false
            }
        case TYPES.USER_NOT_FOUND:
            return {
                ...state,
                validUser: false,
                userError: true
            }

        default: return state
    }
}