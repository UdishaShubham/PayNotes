import axios from "axios";
import { SAVE_NOTE, USER } from "../intefaces";

export default class service {
    static fetchNotes() {
        return axios.get("http://localhost:3001/fetchNotes");
    }

    static saveEditedNotes(note: SAVE_NOTE) {
        return axios.put("http://localhost:3001/saveEditedNote", note);
    }

    static deleteNote(id: string) {
        return axios.delete(`http://localhost:3001/deleteNote/${id}`);
    }

    static createNote(note: SAVE_NOTE) {
        return axios.post('http://localhost:3001/createNote', note);
    }

    static login(user: USER) {
        return axios.post('http://localhost:3001/login', user);
    }
}
