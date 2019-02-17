import React, { Component } from "react";
import NotesContainer from "./notesContainer";
import "../styles/login.css";
import { connect } from "react-redux";
import { login } from "../actions/loginAction";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleLogin() {
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(user);
    }

    render() {
        if (this.props.validUser) {
            return <NotesContainer />
        }
        return (
            <div class="loginDiv">
                <div>
                    <label><b>Username : </b></label>
                    <input type="text" placeholder="Enter email" className="marginText" onChange={this.handleUsernameChange} />
                </div>

                <div>
                    <label><b>Password : </b></label>
                    <input type="password" placeholder="Enter Password" className="marginText" onChange={this.handlePasswordChange} />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary marginText" onClick={this.handleLogin}>Login</button>
                </div>
                {this.props.userError &&
                    <div>
                        <label className="marginText error"><b>Please enter valid credentials</b></label>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        validUser: state.reducer.validUser,
        userError: state.reducer.userError,
        errorMessage: state.reducer.errorMessage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);