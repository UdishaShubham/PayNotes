import * as React from 'react';
import { connect } from "react-redux";
import { fetchNotes, setSelectedNote } from "../actions/fetchNotesAction";
import { openCreateModel } from "../actions/createNoteAction";
import { logout } from "../actions/loginAction";
import Loader from 'react-loader-spinner'
import "../styles/notesContainer.css";
import EditNote from "../components/editNote";
import { FETCH_NOTE, APP_STATE } from "../intefaces";
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

interface dispatchProps {
    fetchNotes: () => void,
    setSelectedNote: (id: string) => void,
    openCreateModel: () => void,
    logout: () => void
}

interface stateProps {
    notes: FETCH_NOTE[],
    isLoading: boolean,
    showModal: boolean,
    validUser: boolean,
}

interface ownProps extends RouteComponentProps {

}

type Props = stateProps & dispatchProps & ownProps;

class NotesContainer extends React.Component <Props, {}>  {
    constructor(props : Props) {
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
        let allNotes : any[] = [];
        this.props.notes.forEach(note => {
            allNotes.push(
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

        return allNotes;
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
            <React.Fragment>
                <button type="button" className="btn btn-primary" onClick={this.handleCreate}>
                    Add
                </button>
                <button id="logout" type="button" className="btn btn-primary rightFloat" onClick={this.logout}>
                    Logout
                </button>
                <div className="card-columns notesDiv">
                    {this.renderNotes()}
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state : APP_STATE) : stateProps {
    return {
        notes: state.reducer.notes,
        isLoading: state.reducer.isLoading,
        showModal: state.reducer.showModal,
        validUser: state.reducer.validUser,
    }
}

function mapDispatchToProps(dispatch : ThunkDispatch <{}, {}, any> ) : dispatchProps {
    return {
        fetchNotes: () => dispatch(fetchNotes()),
        setSelectedNote: id => dispatch(setSelectedNote(id)),
        openCreateModel: () => dispatch(openCreateModel()),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);