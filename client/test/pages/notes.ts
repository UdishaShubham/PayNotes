import { expect } from 'chai';
import { getElement } from '../commonActions';

class Notes {
    clickAdd() {
        getElement('#add').click();
    }

    verifyModalOpened() {
        const modal = getElement('.showPopUpModal');
        expect(modal).to.exist;
    }

    createNote() {
        getElement('#noteHeader').setValue('Hello');
        getElement('#noteText').setValue('Hello World');
        getElement('#save').click();
    }

    verifyNewNote() {
        const newNote = getElement('.card-text=Hello');
        expect(newNote).to.exist;
    }

    closeModal(action: string) {
        if(action === 'cancel') {
            getElement('#cancel').click();
        } else {
            getElement('.modal_close_button').click();
        }
    }

    verifyModalClosed() {
        const addButton = getElement('#add');
        expect(addButton).to.exist;
    }
}

const NotesPage = new Notes();
export default NotesPage;