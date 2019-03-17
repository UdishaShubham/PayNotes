import * as React from "react";
import { hot } from "react-hot-loader";
import Login from "./pages/login";
import Notes from "./pages/notes";
import "./styles/common.css";
import { HashRouter, Route } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/notes" component={Notes} />
                </div>
            </HashRouter>
        )
    }
}

export default hot(module)(App);