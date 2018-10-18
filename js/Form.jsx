import React from "react";

import {About} from "./About.jsx";
import {Coordinator} from "./Coordinator.jsx";
import {When} from "./When.jsx";
import employees from "../data/employees";

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
            time: '',
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

        // console.log(this.state);

        this.validateForm();
    };

    validateForm = () => {
        // console.log('waliduję');
        let titleValid = this.state.title.length > 0;
        let descriptionValid = this.state.description.length > 0;
        let priceValid = !JSON.parse(this.state.payment) ||
            (JSON.parse(this.state.payment) && this.state.price.length > 0);
        let dateValid = this.validateDate(this.state.date);

        this.setState({
            titleValid: titleValid,
            descriptionValid: descriptionValid,
            priceValid: priceValid,
            dateValid: dateValid
        });

        if (typeof this.props.isSuccess === 'function') {
            this.props.isSuccess(titleValid && descriptionValid && priceValid && dateValid);
            this.createNewEvent();
        }
    };

    createNewEvent = () => {
        let duration = parseInt(this.state.duration, 10) * 3600;
        let id = parseInt(this.state.coordinatorId);

        let obj = {
                title: this.state.title,
                description: this.state.description,
                category_id: parseInt(this.state.category),
                paid_event: JSON.parse(this.state.payment),
                event_fee: parseInt(this.state.price),
                reward: parseInt(this.state.reward),
                date: this.state.date + 'T' + this.state.time, // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
                duration: duration,
                coordinator: {
                    email: employees[id].email,
                    id: id,
                }
            };
        console.log(obj);

        // {
        //     title: string,           --ok
        //     description: string,     --ok
        //     category_id: number,     --> parse
        //     paid_event: boolean,     --> parse
        //     event_fee: number,
        //     reward: number,
        //     date: string, // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
        //     duration: number, // in seconds
        //     coordinator: {
        //     email: string,
        //     id: string,
        //     }
        // }

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
        // console.log(employees);


        return <form className="form" onSubmit={this.handleSubmit}>

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
    }
}

export {Form};