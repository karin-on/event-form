import React from "react";
import ReactDOM from "react-dom";

import '../scss/main.scss';

import {Container} from "./components/Container/Container.jsx";


class App extends React.Component {
    render() {
        return <Container/>
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});