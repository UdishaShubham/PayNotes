export interface SAVE_NOTE {
    id?: string;
    name: string;
    content: string;
}

export interface USER {
    username: string;
    password: string;
}

export type FETCH_NOTE = {
    _id: string;
    name: string;
    content: string;
    __v: number;
}

export interface INITIAL_STATE {
    isLoading: boolean;
    showModal: boolean;
    editNote: boolean;
    isNew: boolean;
    validUser: boolean;
    userError: boolean;
    notes: FETCH_NOTE[];
    selectedNote: FETCH_NOTE;
}

export interface APP_STATE {
    reducer: INITIAL_STATE
}





