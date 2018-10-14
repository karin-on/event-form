import React from "react";

import categories from "../data/categories";

class About extends React.Component {
    render() {
        let categoriesOptions = categories.map(el => {
            return <option value={el.id} key={el.id}>{el.name}</option>
        });


        return <div className="form__section section__about">
            <div className="section__header">
                <h2 className="section__title">About</h2>
            </div>

            <div className="section__content">

                <div className="section__row">
                    <label className="label" htmlFor="title">Title <span>*</span></label>
                    <input className="input-lg" type="text" id="title" placeholder="Make it short and clear"/>
                </div>

                <div className="section__row">
                    <label className="label label__description" htmlFor="description">Description <span>*</span></label>
                    <textarea className="input-lg input-descr" id="description" placeholder="Write about your event, be creative"/>
                </div>

                <div className="section__row">
                    <label className="label" htmlFor="category">Category</label>
                    <select className="input-lg" name="category" id="category">

                        <option value="">Select category (skills, interests, locations)</option>
                        {categoriesOptions}

                    </select>
                </div>

                <div className="section__row">
                    <input type="radio" name="" id="" value="Free"/>
                    <label className="label__payment" htmlFor="payment">Free</label>

                    <input type="radio" name="" id="" value="Paid"/>
                    <label className="label__payment" htmlFor="payment">Paid</label>
                </div>

                <div className="section__row">
                    <label className="label" htmlFor="reward">Reward</label>
                    <input className="input-sm" type="text" id="reward" placeholder="Number"/>
                    <span className="add-descr">rewards points for attendance</span>
                </div>
            </div>
        </div>
    }
}

export {About};