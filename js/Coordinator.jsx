import React from "react";

import employees from "../data/employees";

class Coordinator extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email: ''
        }
    }

    handleChange = (e) => {
        let id = e.target.value;

        this.setState({
            email: e.target.value === "default" ? '' : employees[id].email
        })
    };

    render() {
        let employeesMeOption = <option value={employees[4].id}
                                        key={employees[4].id}>
                                        {employees[4].name} {employees[4].lastname}
                                        </option>

        let employeesOtherOptions = [];

        employees.forEach(el => {
            if (el.id !== 4) {
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
                    <label className="label" htmlFor="responsible">
                        Responsible&nbsp;<span>*</span>
                    </label>
                    <select className="input-lg"
                            name="responsible"
                            id="responsible"
                            onChange={e => this.handleChange(e)}>
                        <option value="default">
                            Select employee
                        </option>
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
                           placeholder="Email"
                           value={this.state.email}/>
                </div>

            </div>
        </div>
    }
}

export {Coordinator};