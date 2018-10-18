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
            price: '',
            reward: '',
            coordinatorId: '',
            date: '',
            duration: '',
            titleValid: true,
            descriptionValid: true,
            priceValid: true,
            dateValid: true
        }
    }

    handleFormChange = (value, element) => {
        this.setState({
            [element]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state);
        // console.log(this.state.payment);

        this.validateForm();
    };

    validateForm = () => {
        console.log('waliduję');

        this.setState({
            titleValid: this.state.title.length > 0,
            descriptionValid: this.state.description.length > 0,
            priceValid: !JSON.parse(this.state.payment) || (JSON.parse(this.state.payment) && this.state.price.length > 0),
            dateValid: this.validateDate(this.state.date)
        })
    };

    validateDate = (date) => {
        let arr = date.split('-');
        let valueY = parseInt(arr[0]);
        let valueM = parseInt(arr[1]);
        let valueD = parseInt(arr[2]);

        let currDate = new Date();
        let currY = currDate.getFullYear();
        let currM = currDate.getMonth() + 1;
        let currD = currDate.getDate();

        return (valueY >= currY && valueM >= currM && valueD >= currD);
    };

    render() {
        return <div className="container">

            <div className="header">
                <h1 className="header__title">New event</h1>
            </div>
            <div className="content">

                <form className="form" onSubmit={this.handleSubmit}>

                    <About handleFormChange={this.handleFormChange}
                           titleValid={this.state.titleValid}
                           descriptionValid={this.state.descriptionValid}
                           priceValid={this.state.priceValid}/>
                    <Coordinator handleFormChange={this.handleFormChange}/>
                    <When handleFormChange={this.handleFormChange}
                          dateValid={this.state.dateValid}/>

                    <input className="form-submit"
                           type="submit"
                           value="Publish event"/>

                </form>
            </div>

        </div>
    }
}

export {Form};