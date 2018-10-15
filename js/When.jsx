import React from "react";


class When extends React.Component {

    handleChange = (e) => {
        let arr = e.target.value.split('-');
        let valueY = parseInt(arr[0]);
        let valueM = parseInt(arr[1]);
        let valueD = parseInt(arr[2]);

        let currDate = new Date();
        let currY = currDate.getFullYear();
        let currM = currDate.getMonth() + 1;
        let currD = currDate.getDate();

        if (valueY >= currY && valueM >= currM && valueD >= currD) {
            console.log('ok');
        } else {
            console.log('nie ok');
        }

    }

    render() {

        return <div className="form__section section__when">
            <div className="section__header">
                <h2 className="section__title">When</h2>
            </div>
            <div className="section__content">

                <div className="section__row">
                    <label className="label" htmlFor="date">Starts on&nbsp;<span>*</span></label>
                    <input className="input-sm input-date"
                           type="date"
                           id="date"
                           required
                           onChange={e => this.handleChange(e)}/>

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