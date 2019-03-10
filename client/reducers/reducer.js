import { NOTES } from "../intefaces";

const initialState = {
    isLoading: true,
    showModal: false,
    editNote: false,
    isNew: false,
    validUser: false,
    userError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_NOTES":
            return {
                ...state,
                notes: action.notes,
                isLoading: action.isLoading
            }
        case "SET_SELECTED_NOTE":
            return {
                ...state,
                selectedNote: state.notes.find((note) => note._id === action.id),
                showModal: true,
                isNew: false
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                selectedNote: {},
                showModal: false,
                editNote: false,
                isNew: false
            }
        case "TOGGLE_EDIT_NOTE":
            return {
                ...state,
                editNote: action.editNote
            }
        case "DELETE_NOTE":
            return {
                ...state,
                result: action.payload
            }
        case "CREATE_NOTE":
            return {
                ...state,
                result: action.payload
            }
        case "OPEN_CREATE_MODAL":
            return {
                ...state,
                selectedNote: {},
                showModal: true,
                isNew: true,
                editNote: true
            }
        case "LOGIN":
            return {
                ...state,
                validUser: true,
                userError: false
            }
        case "LOGOUT":
            return {
                ...state,
                validUser: false,
                userError: false
            }
        case "USER_NOT_FOUND":
            return {
                ...state,
                validUser: false,
                userError: true
            }

        default: return state
    }
}