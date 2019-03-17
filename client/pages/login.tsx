import * as React from "react";
import "../styles/login.css";
import { connect } from "react-redux";
import { login } from "../actions/loginAction";
import { USER, APP_STATE } from "../intefaces";
import { ThunkDispatch } from 'redux-thunk';
import { RouteComponentProps } from 'react-router-dom';

interface dispatchProps {
    login: (user: USER) => any;
}

interface stateProps {
    userError: boolean;
}

interface ownProps extends RouteComponentProps {

}

interface State {
    username: string;
    password: string;
} 

type Props = stateProps & dispatchProps & ownProps;

class Login extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handlePasswordChange(e: any) {
        this.setState({
            password: e.target.value
        })
    }

    handleUsernameChange(e: any) {
        this.setState({
            username: e.target.value
        })
    }

    handleLogin() {
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(user).then(() =>
            this.props.history.push("/notes")
        )
    }

    render() {
        return (
            <div className="loginDiv">
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

function mapStateToProps(state : APP_STATE) : stateProps {
    return {
        userError: state.reducer.userError
    }
}

function mapDispatchToProps(dispatch : ThunkDispatch<{}, {}, any>) : dispatchProps{
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);