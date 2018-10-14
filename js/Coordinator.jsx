import React from "react";


class Coordinator extends React.Component {
    render() {
        return <div className="form__section section__coordinator">
            <div className="section__header">
                <h2 className="section__title">Coordinator</h2>
            </div>
            <div className="section__content">

                <div className="section__row">
                    <label className="label" htmlFor="responsible">Responsible <span>*</span></label>
                    <select className="input-lg" name="responsible" id="responsible">
                        <optgroup label="Me">
                            <option value="">Ashley Hernandez</option>
                        </optgroup>
                        <optgroup label="Others">
                            <option value="">Daniel Mitchell</option>
                            <option value="">Albert Alexander</option>
                            <option value="">Philip Hughes</option>
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