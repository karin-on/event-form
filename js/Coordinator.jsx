import React from "react";

import employees from "../data/employees";

class Coordinator extends React.Component {
    constructor(props) {
        super(props);
        this.loggedInId = 3;
        this.state={
            email: employees[this.loggedInId].email,      //lub ''
            // loggedInId: 3,
            coordinator: this.loggedInId
        }
    }

    handleChange = (e, element) => {
        let id = e.target.value;
        console.log(id);

        this.setState({
            email: employees[id].email,
            coordinator: id
        });

        if (typeof this.props.handleFormChange === 'function') {
            this.props.handleFormChange(id, element);
        }
    };

    render() {
        let loggedId = this.loggedInId;
        let currId = this.state.coordinator;

        let employeesMeOption = <option value={employees[loggedId].id}
                                        key={employees[loggedId].id}>
                                        {employees[loggedId].name}&nbsp;{employees[loggedId].lastname}
                                        </option>

        let employeesOtherOptions = [];

        employees.forEach(el => {
            if (el.id !== loggedId) {
                let opt = <option value={el.id}
                                  key={el.id}>
                                  {el.name} {el.lastname}
                                  </option>
                employeesOtherOptions.push(opt);
            }
        });


        return <div className="form__section section__coordinator">
            <div className="section__header">
                <h2 className="section__title">Coordinator</h2>
            </div>
            <div className="section__content">

                <div className="section__row">
                    <label className="label" htmlFor="coordinator">
                        Responsible&nbsp;<span>*</span>
                    </label>
                    <select className="input-lg"
                            name="coordinator"
                            id="coordinator"
                            value={this.state.coordinator}
                            onChange={e => this.handleChange(e, 'coordinatorId')}>
                        <optgroup label="Me">
                            {employeesMeOption}
                        </optgroup>
                        <optgroup label="Others">
                            {employeesOtherOptions}
                        </optgroup>
                    </select>
                </div>

                <div className="section__row">
                    <label className="label" htmlFor="email">Email</label>
                    <input className="input-lg"
                           type="email"
                           id="email"
                           // placeholder="Email"
                           value={this.state.email} readOnly/>
                </div>

            </div>
        </div>
    }
}

export {Coordinator};