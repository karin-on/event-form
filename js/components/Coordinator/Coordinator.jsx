import React from "react";

import employees from "../../../data/employees";

class Coordinator extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isDropdownOpen: false,
            chosenOptionID: this.props.loggedInId
        }
    }

    toggleDropdown = () => {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        })
    };

    handleBlur = () => {
        this.setState({
            isDropdownOpen: false
        })
    };

    handleOptionClick = (e) => {
        this.setState({
            isDropdownOpen: false,
            chosenOptionID: e.target.value
        });

        if (typeof this.props.handleFormChange === 'function') {
            this.props.handleFormChange(e, 'coordinator');
        }
    };

    render() {
        const loggedInId = this.props.loggedInId;
        const email = employees[this.props.coordinator].email;

        const meOption = employees[loggedInId].name +
            ' ' +
            employees[loggedInId].lastname;

        const chosenOption = employees[this.state.chosenOptionID].name +
                            ' ' +
                            employees[this.state.chosenOptionID].lastname;

        const employeesOtherOptions = employees.filter(el => el.id != loggedInId).map(el => {
            return <li className="dropdown__option"
                       value={el.id}
                       key={el.id}
                       onClick={e => this.handleOptionClick(e)}>
                {el.name} {el.lastname}
            </li>
        });


        return <div className="form__section">
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
                        <div className="dropdown__container coordinator"
                             onClick={this.toggleDropdown}
                             onBlur={this.handleBlur} tabIndex="0">

                            <div className="dropdown__chosen-option">
                                {chosenOption}
                            </div>

                            {this.state.isDropdownOpen ?
                            <div className="dropdown__list-container">
                                <h6 className="dropdown__group-heading">Me</h6>
                                <ul className="dropdown__list">
                                    <li className="dropdown__option"
                                        value={loggedInId}
                                        onClick={e => this.handleOptionClick(e)}>
                                        {meOption}
                                    </li>
                                </ul>

                                <h6 className="dropdown__group-heading">Others</h6>
                                <ul className="dropdown__list">
                                    {employeesOtherOptions}
                                </ul>
                            </div>
                                : null}

                            <span className="dropdown__arrow">
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