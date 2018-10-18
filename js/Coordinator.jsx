import React from "react";

import employees from "../data/employees";

class Coordinator extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email: employees[3].email,      //lub ''
            loggedInId: 3
        }
    }

    handleChange = (e, element) => {
        let id = e.target.value;
        console.log(element);

        this.setState({
            email: employees[id].email
        });

        if (typeof this.props.handleFormChange === 'function') {
            this.props.handleFormChange(id, element);
        }
    };

    render() {
        let loggedId = this.state.loggedInId;

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