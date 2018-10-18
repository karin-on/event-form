import React from "react";
import ReactDOM from "react-dom";

import '../scss/main.scss';

import {Container} from "./Container.jsx";


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