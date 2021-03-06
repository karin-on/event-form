import React from "react";


class When extends React.Component {

    handleChange = (e, element) => {
        if (typeof this.props.handleFormChange === 'function') {
            this.props.handleFormChange(e, element);
        }
    };

    render() {

        const dateLabelClass = this.props.dateValid ?
                            'label' :
                            'label error';
        let dateInputClass = this.props.dateValid ?
                            'input-sm input-date' :
                            'input-sm input-date error';
        let dateMsgClass = this.props.dateValid ?
                            'error-msg display-none' :
                            'error-msg';


        return <div className="form__section">
            <div className="section__header">
                <h2 className="section__title">When</h2>
            </div>

            <div className="section__content">
                <div className="section__row">
                    <div className="row__col-1">
                        <label className={dateLabelClass}
                               htmlFor="date">
                            Starts on&nbsp;<span className="label-star">*</span>
                        </label>
                    </div>

                    <div className="row__col-2 col-2__date">
                        <input className={dateInputClass}
                               type="date"
                               id="date"
                               required
                               onChange={e => this.handleChange(e, 'date')}/>

                        <span className="form-text">at</span>
                        <input className="input-sm input-time"
                               type="time"
                               id="time" min="00:00" max="11:59"
                               required
                               onChange={e => this.handleChange(e, 'time')}/>


                        <label className="label__time" htmlFor="am">AM
                            <input className="radio"
                                   type="radio" name="time" id="am"
                                   value={false}
                                   onChange={e => this.handleChange(e, 'isPm')}
                                   defaultChecked/>
                            <span className="custom-radio"></span>
                        </label>

                        <label className="label__time" htmlFor="pm">PM
                            <input className="radio"
                                   type="radio" name="time" id="pm"
                                   value={true}
                                   onChange={e => this.handleChange(e, 'isPm')}/>
                            <span className="custom-radio"></span>
                        </label>
                    </div>

                    <div className="row__col-3">
                        <div className={dateMsgClass}>
                            Date cannot be empty or prior to the actual date
                            <span className="caret">
                                <i className="fa fa-caret-left" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="section__row">
                    <div className="row__col-1">
                        <label className="label" htmlFor="duration">Duration</label>
                    </div>

                    <div className="row__col-2">
                        <input className="input-sm"
                               type="text"
                               id="duration"
                               placeholder="Number"
                               value={this.props.duration}
                               onChange={e => this.handleChange(e, 'duration')}/>
                        <span className="form-text">hour</span>
                    </div>
                </div>
            </div>

        </div>
    }
}

export {When};