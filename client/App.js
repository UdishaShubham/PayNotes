import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Login from "./components/login";
import "./styles/common.css";

class App extends Component {
    render() {
        return (
            <Login />
        )
    }
}

export default hot(module)(App);