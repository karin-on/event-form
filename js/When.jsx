import React from "react";


class When extends React.Component {
    render() {
        return <div className="form__section section__when">
            <div className="section__header">
                <h2 className="section__title">When</h2>
            </div>
            <div className="section__content">

                <div className="section__row">
                    <label className="label" htmlFor="date">Starts on&nbsp;<span>*</span></label>
                    <input className="input-sm input-date" type="date" id="date" required/>
                    <span className="add-descr">at</span>
                    <input className="input-sm input-time" type="time" id="time" required/>

                    <input type="radio" name="time" id="am" value="am" defaultChecked/>
                    <label className="label__payment" htmlFor="am">AM</label>
                    <input type="radio" name="time" id="pm" value="pm"/>
                    <label className="label__payment" htmlFor="pm">PM</label>
                </div>

                <div className="section__row">
                    <label className="label" htmlFor="duration">Duration</label>
                    <input className="input-sm" type="text" id="duration" placeholder="Number"/>
                    <span className="add-descr">hour</span>
                </div>

            </div>
        </div>
    }
}

export {When};