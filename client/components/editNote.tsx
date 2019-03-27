import * as React from 'react';
import { toggleEditNote, saveEditedNote, closeModal } from '../actions/editNoteAction';
import { connect } from "react-redux";
import "../styles/editNote.css";
import { deleteNote } from '../actions/deleteNoteAction';
import { createNote } from '../actions/createNoteAction';
import { ThunkDispatch } from 'redux-thunk';
import { SAVE_NOTE, FETCH_NOTE, APP_STATE } from "../intefaces";

const DISABLE_BACKGROUND = "#e5e5e5";
const ENABLE_BACKGROUND = "#fff";

interface dispatchProps {
    toggleEditNote: (editNote: boolean) => void;
    saveEditedNote: (note: SAVE_NOTE) => void;
    deleteNote: (id: string) => void;
    closeModal: () => void;
    createNote: (note: SAVE_NOTE) => void;
}

interface stateProps {
    selectedNote: FETCH_NOTE;
    editNote: boolean;
    isNew: boolean;
}

interface State {
    content: string;
    name: string;
} 

type Props = stateProps & dispatchProps;

class EditNote extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            content: this.props.selectedNote.content,
            name: this.props.selectedNote.name
        }
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleContentChange(e: any) {
        this.setState({
            content: e.target.value
        })
    }

    handleNameChange(e: any) {
        this.setState({
            name: e.target.value
        })
    }

    handleSave() {
        const note = {
            id: this.props.selectedNote._id,
            name: this.state.name,
            content: this.state.content
        }
        this.props.isNew ? this.props.createNote(note) : this.props.saveEditedNote(note);
    }

    handleDelete() {
        this.props.deleteNote(this.props.selectedNote._id);
    }

    handleCancel() {
        this.props.isNew ? this.props.closeModal() : this.props.toggleEditNote(false);
    }

    render() {
        const backgroundColor = this.props.editNote ? ENABLE_BACKGROUND : DISABLE_BACKGROUND;
        return (
            <div className="openPopUp">
                <button className="modal_close_button" onClick={() => this.props.closeModal()}> X </button>
                <div className="showPopUpModal">
                    <textarea
                        id="noteHeader"
                        className="modalHeader"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        style={{ background: backgroundColor }}
                        disabled={!this.props.editNote} />
                    <textarea
                        id="noteText"
                        value={this.state.content}
                        onChange={this.handleContentChange}
                        className="noteText"
                        style={{ background: backgroundColor }}
                        disabled={!this.props.editNote} />
                    {!this.props.editNote && <div className="buttonDiv">
                        <button type="button" className="btn btn-dark"
                            onClick={this.handleDelete}>
                            Delete
                        </button>
                        <button type="button" className="btn btn-dark buttonRight"
                            onClick={() => this.props.toggleEditNote(true)}>
                            Edit
                        </button>
                    </div>}
                    {this.props.editNote && <div className="buttonDiv">
                        <button id="cancel" type="button" className="btn btn-dark"
                            onClick={this.handleCancel}>
                            Cancel
                        </button>
                        <button id="save" type="button" className="btn btn-dark buttonRight"
                            onClick={this.handleSave}>Save</button>
                    </div>}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: APP_STATE): stateProps {
    return {
        selectedNote: state.reducer.selectedNote,
        editNote: state.reducer.editNote,
        isNew: state.reducer.isNew
    }
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>): dispatchProps {
    return {
        toggleEditNote: editNote => dispatch(toggleEditNote(editNote)),
        saveEditedNote: note => dispatch(saveEditedNote(note)),
        deleteNote: id => dispatch(deleteNote(id)),
        closeModal: () => dispatch(closeModal()),
        createNote: note => dispatch(createNote(note))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);