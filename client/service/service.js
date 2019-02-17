import axios from "axios";

export default class service {
    static fetchNotes() {
        return axios.get("http://localhost:3001/fetchNotes");
    }

    static saveEditedNotes(note) {
        return axios.put("http://localhost:3001/saveEditedNote", note);
    }

    static deleteNote(id) {
        return axios.delete(`http://localhost:3001/deleteNote/${id}`);
    }

    static createNote(note) {
        return axios.post('http://localhost:3001/createNote', note);
    }

    static login(user) {
        return axios.post('http://localhost:3001/login', user);
    }
}
