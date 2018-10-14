import React from "react";


class Form extends React.Component {
    render() {
        return <div className="container">

            <div className="header">
                <h1 className="header__title">New event</h1>
            </div>
            <div className="content">

                <form className="form">
                    <div className="form__section section__about">
                        <div className="section__header">
                            <h2 className="section__title">About</h2>
                        </div>
                        <div className="section__content">
                            <label className="label" htmlFor="title">Title
                                <input type="text" id="title" placeholder="Make it short and clear"/>
                            </label>
                            <label className="label" htmlFor="description">Description
                                <input type="text" id="description" placeholder="Write about your event, be creative"/>
                            </label>

                            <label htmlFor="category">Category
                                <select name="category" id="category">
                                    <option value="">Select category</option>
                                    <option value="">Hiking</option>
                                    <option value="">Cycling</option>
                                </select>
                            </label>

                            <label className="label" htmlFor="payment">Free
                                <input type="radio" name="" id="" value="Free"/>
                            </label>
                            <label className="label" htmlFor="payment">Paid
                                <input type="radio" name="" id="" value="Paid"/>
                            </label>

                            <label className="label" htmlFor="reward">Reward
                                <input type="text" id="reward" placeholder="Number"/>
                            </label>
                            <span className="reward__descr">rewards points for attendance</span>
                        </div>
                    </div>



                    <div className="form__section section__coordinator">
                        <div className="section__header">
                            <h2 className="section__title">Coordinator</h2>
                        </div>
                        <div className="section__content"></div>
                    </div>

                    <div className="form__section section__when">
                        <div className="section__header">
                            <h2 className="section__title">When</h2>
                        </div>
                        <div className="section__content"></div>
                    </div>
                    <input className="form-submit" type="submit" value="Publish event"/>
                </form>
            </div>


        </div>
    }
}

export {Form};