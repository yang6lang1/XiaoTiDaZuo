import React, { Component } from "react";
import LoginForm from "./authentication/LoginForm";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
    componentDidMount() {
        //TODO: get states from DB
    }

    componentWillUnmount() {

    }

    render() {
        return (<LoginForm />);
    }
}

export default App;