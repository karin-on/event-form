import React from "react";

import employees from "../../../data/employees";

class Coordinator extends React.Component {

    handleChange = (e, element) => {
        if (typeof this.props.handleFormChange === 'function') {
            this.props.handleFormChange(e, element);
        }
    };

    render() {
        let loggedId = this.props.loggedInId;
        let email = employees[this.props.coordinator].email;

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
                    <div className="row__col-1">
                        <label className="label" htmlFor="coordinator">
                            Responsible&nbsp;<span className="label-star">*</span>
                        </label>
                    </div>

                    <div className="row__col-2">
                        <div className="custom-select">
                            <select className="select coordinator"
                                    name="coordinator"
                                    id="coordinator"
                                    onChange={e => this.handleChange(e, 'coordinator')}>
                                <optgroup label="Me">
                                    {employeesMeOption}
                                </optgroup>
                                <optgroup label="Others">
                                    {employeesOtherOptions}
                                </optgroup>
                            </select>
                            <span className="custom-select__arrow">
                                <i className="fa fa-caret-down fa-lg" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="section__row">
                    <div className="row__col-1">
                        <label className="label" htmlFor="email">Email</label>
                    </div>
                    <div className="row__col-2">
                        <input className="input-lg input__read-only"
                               type="email"
                               id="email"
                               value={email} readOnly/>
                    </div>
                </div>

            </div>
        </div>
    }
}

export {Coordinator};