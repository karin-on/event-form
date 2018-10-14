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

        let title = (this.state.title.length === 0) ? 'Title cannot be empty' : '';
        console.log(this.state.description);
        console.log(this.state.category);
        console.log(this.state.payment);
        console.log(this.state.reward);
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