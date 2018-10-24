import React from "react";


class When extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            duration: ''
        }
    }

    handleChange = (e, element) => {
        if (element === 'duration') {
            const value = e.target.value.replace(/\D/g, '');
            this.setState({
                [element]: value
            });

            if (typeof this.props.handleFormChange === 'function') {
                this.props.handleFormChange(value, element);
            }
        }

        if (typeof this.props.handleFormChange === 'function') {
            this.props.handleFormChange(e.target.value, element);
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
                            'error-msg-date display-none' :
                            'error-msg-date';


        return <div className="form__section section__when">
            <div className="section__header">
                <h2 className="section__title">When</h2>
            </div>
            <div className="section__content">

                <div className="section__row">
                    <label className={dateLabelClass}
                           htmlFor="date">Starts on&nbsp;<span>*</span></label>
                    <span className="input-sm__wrapper">
                        <input className={dateInputClass}
                               type="date"
                               id="date"
                               required
                               onChange={e => this.handleChange(e, 'date')}/>

                        <span className={dateMsgClass}>
                            Date cannot be prior to the actual date
                            <span className="caret">
                                <i className="fa fa-caret-left" aria-hidden="true"></i>
                            </span>
                        </span>
                    </span>

                    <span className="add-text">at</span>
                    <input className="input-sm input-time"
                           type="time"
                           id="time" min="00:00" max="11:59"
                           required
                           onChange={e => this.handleChange(e, 'time')}/>

                    <input className="radio__time"
                           type="radio" name="time" id="am"
                           value={false}
                           onChange={e => this.handleChange(e, 'isPm')}
                           defaultChecked/>
                    <label className="label__time" htmlFor="am">AM</label>

                    <input className="radio__time"
                           type="radio" name="time" id="pm"
                           value={true}
                           onChange={e => this.handleChange(e, 'isPm')}/>
                    <label className="label__time" htmlFor="pm">PM</label>
                </div>

                <div className="section__row">
                    <label className="label" htmlFor="duration">Duration</label>
                    <input className="input-sm"
                           type="text"
                           id="duration"
                           placeholder="Number"
                           value={this.state.duration}
                           onChange={e => this.handleChange(e, 'duration')}/>
                    <span className="add-text">hour</span>
                </div>

            </div>
        </div>
    }
}

export {When};