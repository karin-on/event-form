import React from "react";

import {About} from "./About.jsx";
import {Coordinator} from "./Coordinator.jsx";
import {When} from "./When.jsx";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title: '',
            description: '',
            category: '',
            payment: false,
            reward: ''
        }
    }

    handleFormChange = (value, element) => {
        this.setState({
            [element]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.validateForm();
    };

    validateForm = () => {
        console.log('waliduję');

        let title = this.state.title.length === 0 ? 'Title cannot be empty' : '';
        let description = (this.state.description.length === 0 ||
            this.state.description.length > 140) ?
            'Description cannot be empty or longer than 140 characters' : '';

        console.log(title, description);
    };


    render() {

        return <div className="container">

            <div className="header">
                <h1 className="header__title">New event</h1>
            </div>
            <div className="content">

                <form className="form" onSubmit={this.handleSubmit}>

                    <About handleFormChange={this.handleFormChange}/>
                    <Coordinator/>
                    <When/>

                    <input className="form-submit"
                           type="submit"
                           value="Publish event"/>

                </form>
            </div>

        </div>
    }
}

export {Form};