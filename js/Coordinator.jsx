import React from "react";

import employees from "../data/employees";

class Coordinator extends React.Component {
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
                    <label className="label" htmlFor="responsible">Responsible <span>*</span></label>
                    <select className="input-lg" name="responsible" id="responsible">
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
                    <input className="input-lg" type="email" id="email" placeholder="Email"/>
                </div>

            </div>
        </div>
    }
}

export {Coordinator};