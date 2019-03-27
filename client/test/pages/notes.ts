import { expect } from 'chai';
import { getElement, elementExists } from '../commonActions';

class Notes {
    clickAdd() {
        getElement('#add').click();
    }

    verifyModalOpened(action: string) {
        const modal = getElement('.showPopUpModal');
        expect(modal).to.exist;
    }

    createNote(header: string, text: string) {
        getElement('#noteHeader').setValue(header);
        getElement('#noteText').setValue(text);
        getElement('#save').click();
    }

    verifyNote(text: string) {
        const newNote = getElement(`.card-text=${text}`);
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
        const modalExists = elementExists('.showPopUpModal');
        const addButton = getElement('#add');
        expect(modalExists).to.be.false;
        expect(addButton).to.exist;
    }

    openEditNote(text: string) {
        getElement(`.card-text=${text}`).click();
    }

    verifyEditNoteOpened() {
        const header = getElement('#noteHeader');
        const text = getElement('#noteText');
        expect(header.getText()).to.be.equal('Hello');
        expect(text.getText()).to.be.equal('Hello World');
    }

    editNote() {
        getElement('#edit').click();
    }

    deleteNote() {
        getElement('#delete').click();
    }

    verifyDeleteNote() {
        const noteExists = elementExists('.card-text=Hello');
        expect(noteExists).to.be.false;
    }

    verifyEditButton() {
        const editButton = getElement('#edit');
        expect(editButton).to.exist;
    }
}

const NotesPage = new Notes();
export default NotesPage;