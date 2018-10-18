import React from "react";


class When extends React.Component {

    handleChange = (e, element) => {
        if (typeof this.props.handleFormChange === 'function') {
            this.props.handleFormChange(e.target.value, element);
        }
    };

    render() {
        console.log(this.props.dateValid);

        const dateLabelClass = this.props.dateValid ?
                            'label' :
                            'label error';
        let dateInputClass = this.props.dateValid ?
                            'input-sm input-date' :
                            'input-sm input-date error';


        return <div className="form__section section__when">
            <div className="section__header">
                <h2 className="section__title">When</h2>
            </div>
            <div className="section__content">

                <div className="section__row">
                    <label className={dateLabelClass}
                           htmlFor="date">Starts on&nbsp;<span>*</span></label>
                    <input className={dateInputClass}
                           type="date"
                           id="date"
                           required
                           onChange={e => this.handleChange(e, 'date')}/>

                    <span className="add-text">at</span>
                    <input className="input-sm input-time"
                           type="time"
                           id="time" min="00:00" max="11:59" required/>

                    <input type="radio" name="time" id="am" value="am" defaultChecked/>
                    <label className="label__payment" htmlFor="am">AM</label>
                    <input type="radio" name="time" id="pm" value="pm"/>
                    <label className="label__payment" htmlFor="pm">PM</label>
                </div>

                <div className="section__row">
                    <label className="label" htmlFor="duration">Duration</label>
                    <input className="input-sm" type="text" id="duration" placeholder="Number"/>
                    <span className="add-text">hour</span>
                </div>

            </div>
        </div>
    }
}

export {When};