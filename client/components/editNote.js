import React, { Component } from 'react';
import { toggleEditNote, saveEditedNote, closeModal } from '../actions/editNoteAction.ts';
import { connect } from "react-redux";
import "../styles/editNote.css";
import { deleteNote } from '../actions/deleteNoteAction.ts';
import { createNote } from '../actions/createNoteAction.ts';

const DISABLE_BACKGROUND = "#e5e5e5";
const ENABLE_BACKGROUND = "#fff";

class EditNote extends Component {
    constructor(props) {
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

    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSave() {
        const request = {
            id: this.props.selectedNote._id,
            name: this.state.name,
            content: this.state.content
        }
        this.props.isNew ? this.props.createNote(request) : this.props.saveEditedNote(request);
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
                        className="modalHeader"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        style={{ background: backgroundColor }}
                        disabled={!this.props.editNote} />
                    <textarea
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
                        <button type="button" className="btn btn-dark"
                            onClick={this.handleCancel}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-dark buttonRight"
                            onClick={this.handleSave}>Save</button>
                    </div>}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedNote: state.reducer.selectedNote,
        isLoading: state.reducer.isLoading,
        editNote: state.reducer.editNote,
        isNew: state.reducer.isNew
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleEditNote: editNote => dispatch(toggleEditNote(editNote)),
        saveEditedNote: request => dispatch(saveEditedNote(request)),
        deleteNote: id => dispatch(deleteNote(id)),
        closeModal: () => dispatch(closeModal()),
        createNote: request => dispatch(createNote(request))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);