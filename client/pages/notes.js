import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { fetchNotes, setSelectedNote } from "../actions/fetchNotesAction.ts";
import { openCreateModel } from "../actions/createNoteAction.ts";
import { logout } from "../actions/loginAction.ts";
import Loader from 'react-loader-spinner'
import "../styles/notesContainer.css";
import EditNote from "../components/editNote";

class NotesContainer extends Component {
    constructor(props) {
        super(props);
        this.renderNotes = this.renderNotes.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentWillMount() {
        if (this.props.validUser) {
            this.props.fetchNotes();
        } else {
            this.logout();
        }
    }

    handleCreate() {
        this.props.openCreateModel();
    }

    renderNotes() {
        let notes = [];
        this.props.notes.forEach(note => {
            notes.push(
                <div
                    className="card bg-warning clickable"
                    key={note._id}
                    onClick={() => this.props.setSelectedNote(note._id)}
                >
                    <div className="card-body text-center">
                        <p className="card-text">{note.name}</p>
                    </div>
                </div>
            )
        })

        return notes;
    }

    logout() {
        this.props.logout();
        this.props.history.push("/");
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div className="loader">
                    <Loader type="CradleLoader" />
                </div>
            )
        }

        if (this.props.showModal) {
            return <EditNote />
        }

        return (
            <Fragment>
                <button type="button" className="btn btn-primary" onClick={this.handleCreate}>
                    Add
                </button>
                <button type="button" className="btn btn-primary rightFloat" onClick={this.logout}>
                    Logout
                </button>
                <div className="card-columns notesDiv">
                    {this.renderNotes()}
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        notes: state.reducer.notes,
        isLoading: state.reducer.isLoading,
        showModal: state.reducer.showModal,
        validUser: state.reducer.validUser,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchNotes: () => dispatch(fetchNotes()),
        setSelectedNote: id => dispatch(setSelectedNote(id)),
        openCreateModel: () => dispatch(openCreateModel()),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);