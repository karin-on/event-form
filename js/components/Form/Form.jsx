import React from "react";

import {About} from "../About/About.jsx";
import {Coordinator} from "../Coordinator/Coordinator.jsx";
import {When} from "../When/When.jsx";
import employees from "../../../data/employees";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.loggedInId = '3';
        this.state={
            title: '',
            description: '',
            category: '',
            payment: false,
            fee: '',
            reward: '',
            coordinator: this.loggedInId,
            date: '',
            time: '',
            isPm: false,
            duration: '',
            titleValid: true,
            descriptionValid: true,
            feeValid: true,
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

        if (this.validateForm() && typeof this.props.isSuccess === 'function') {
            this.props.isSuccess(this.validateForm());
            console.log(this.createEvent());
        }
    };

    validateForm = () => {
        let titleValid = this.state.title.length > 0;
        let descriptionValid = this.state.description.length > 0 && this.state.description.length <= 140;
        let feeValid = !JSON.parse(this.state.payment) ||
            (JSON.parse(this.state.payment) && this.state.fee.length > 0);
        let dateValid = this.validateDate();

        this.setState({
            titleValid: titleValid,
            descriptionValid: descriptionValid,
            feeValid: feeValid,
            dateValid: dateValid
        });

        return (titleValid && descriptionValid && feeValid && dateValid);
    };

    createEvent = () => {
        let category_id = this.state.category === '' ?
                        null :
                        parseInt(this.state.category);
        let event_fee = this.state.fee === '' ?
                        0 :
                        parseInt(this.state.fee);
        let reward = this.state.reward === '' ?
                        0 :
                        parseInt(this.state.reward);
        let duration = this.state.duration === '' ?
                        0 :
                        parseInt(this.state.duration, 10) * 3600;
        let id = this.state.coordinator;

        return ({
            title: this.state.title,
            description: this.state.description,
            category_id: category_id,
            paid_event: JSON.parse(this.state.payment),
            event_fee: event_fee,
            reward: reward,
            date: this.state.date + 'T' + this.convertTime(),
            duration: duration,
            coordinator: {
                email: employees[id].email,
                id: id,
            }
        });
    };

    validateDate = () => {
        let arr = this.state.date.split('-');
        let valueY = parseInt(arr[0]);
        let valueM = parseInt(arr[1]);
        let valueD = parseInt(arr[2]);

        let currDate = new Date();
        let currY = currDate.getFullYear();
        let currM = currDate.getMonth() + 1;
        let currD = currDate.getDate();

        return (valueY >= currY && valueM >= currM && valueD >= currD);
    };

    convertTime = () => {
        if (!this.state.isPm) {
            return this.state.time;
        }

        let am = this.state.time.slice(0,2);
        let left = this.state.time.slice(2);
        let pm = (Number(am) + 12).toString();

        return pm + left;
    };


    render() {

        return <form className="form" onSubmit={this.handleSubmit}>

            <About handleFormChange={this.handleFormChange}
                   titleValid={this.state.titleValid}
                   descriptionValid={this.state.descriptionValid}
                   feeValid={this.state.feeValid}/>

            <Coordinator loggedInId={this.loggedInId}
                         handleFormChange={this.handleFormChange}/>

            <When handleFormChange={this.handleFormChange}
                  dateValid={this.state.dateValid}/>

            <input className="form-submit"
                   type="submit"
                   value="Publish event"/>

        </form>
    }
}

export {Form};