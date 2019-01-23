import React from "react";

import categories from "../../../data/categories";

class About extends React.Component {

    handleChange = (e, element) => {
        if (typeof this.props.handleFormChange === 'function') {
            this.props.handleFormChange(e, element);
        }
    };

    render() {

        const descrLength = this.props.state.description.length;
        const categoriesOptions = categories.map(el => {
            return <option value={el.id} key={el.id}>{el.name}</option>
        });


        const titleLabelClass = this.props.state.titleValid ?
                            'label' :
                            'label error';
        const titleInputClass = this.props.state.titleValid ?
                            'input-lg' :
                            'input-lg error';
        const titleMsgClass = this.props.state.titleValid ?
                            'error-msg display-none' :
                            'error-msg';

        const descriptionLabelClass = this.props.state.descriptionValid ?
                                'label label__description' :
                                'label label__description error';
        const descriptionAreaClass = this.props.state.descriptionValid ?
                                'input-lg input-descr' :
                                'input-lg input-descr error';
        const descriptionMsgClass = this.props.state.descriptionValid ?
                                'error-msg-descr display-none' :
                                'error-msg-descr';

        const payment = this.props.state.payment;
        const feeWrapperClass = (JSON.parse(payment)) ?
                                "input-sm__wrapper" :
                                "input-sm__wrapper display-none";

        const feeLabelClass = this.props.state.feeValid ?
                                "payment-title" :
                                "payment-title error";
        const feeInputClass = this.props.state.feeValid ?
                                "input-sm input-sm--about" :
                                "input-sm input-sm--about error";
        const feeMsgClass = this.props.state.feeValid ?
                                'error-msg display-none' :
                                'error-msg';


        return <div className="form__section section__about">
            <div className="section__header">
                <h2 className="section__title">About</h2>
            </div>

            <div className="section__content">

                <div className="section__row">

                    <div className="row__col-1">
                        <label className={titleLabelClass}
                               htmlFor="title">
                            Title&nbsp;<span className="label-star">*</span>
                        </label>
                    </div>

                    <div className="row__col-2">
                        <input className={titleInputClass}
                               type="text"
                               id="title"
                               placeholder="Make it short and clear"
                               value={this.props.state.title}
                               onChange={e => this.handleChange(e, 'title')}/>
                    </div>

                    <div className="row__col-3">
                        <div className={titleMsgClass}>
                            Title cannot be empty
                            <span className="caret">
                                <i className="fa fa-caret-left" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="section__row row__description">

                    <div className="row__col-1">
                        <label className={descriptionLabelClass}
                               htmlFor="description">
                            Description&nbsp;<span className="label-star">*</span>
                        </label>
                    </div>

                    <div className="row__col-2">
                        <textarea className={descriptionAreaClass}
                                  id="description"
                                  placeholder="Write about your event, be creative"
                                  value={this.props.state.description}
                                  onChange={e => this.handleChange(e, 'description')}/>
                        <div className="input-descr__additions">
                            <span className="input-descr__note">Max length 140 characters</span>
                            <span className="input-descr__char">{descrLength}/140</span>
                        </div>
                    </div>

                    <div className="row__col-3">
                        <div className={descriptionMsgClass}>
                            Description cannot be empty or exceed 140 characters
                            <span className="caret">
                                <i className="fa fa-caret-left" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="section__row row__category">
                    <div className="row__col-1">
                        <label className="label label__category"
                               htmlFor="category">
                            Category
                        </label>
                    </div>

                    <div className="row__col-2">
                        <div className="custom-select">
                            <select className="select"
                                    name="category"
                                    id="category"
                                    value={this.props.state.category}
                                    onChange={e => this.handleChange(e, 'category')}>

                            <option>Select category (skills, interests, locations)</option>
                            {categoriesOptions}
                            </select>
                            <span className="custom-select__arrow">
                                <i className="fa fa-caret-down fa-lg" aria-hidden="true"></i>
                            </span>
                        </div>
                        <span className="input-descr__note">
                            Describes topic and people who should be interested in this event
                        </span>
                    </div>

                </div>

                <div className="section__row row__payment">
                    <div className="row__col-1">
                        <span className={feeLabelClass}>
                            Payment&nbsp;<span className="label-star">*</span>
                        </span>
                    </div>

                    <div className="row__col-2 col-2__payment">
                        <input className="radio"
                               type="radio"
                               name="payment"
                               id="payment-free"
                               value={false}
                               onChange={e => this.handleChange(e, 'payment')} defaultChecked/>
                        <label className="label__payment"
                               htmlFor="payment">Free event</label>

                        <input className="radio"
                               type="radio"
                               name="payment"
                               id="payment-paid"
                               value={true}
                               onChange={e => this.handleChange(e, 'payment')}/>
                        <label className="label__payment"
                               htmlFor="payment">Paid event</label>

                        {/*<span className={feeWrapperClass}>*/}
                            <input className={feeInputClass}
                                   type="text"
                                   id="fee"
                                   placeholder="Fee"
                                   value={this.props.state.fee}
                                   onChange={e => this.handleChange(e, 'fee')}/>
                            <span className="form-text">$</span>
                        {/*</span>*/}
                    </div>

                    <div className="row__col-3">
                        <div className={feeMsgClass}>
                            Fee cannot be empty
                            <span className="caret">
                                <i className="fa fa-caret-left" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>



                </div>

                <div className="section__row">
                    <div className="row__col-1">
                        <label className="label"
                               htmlFor="reward">
                            Reward
                        </label>
                    </div>

                    <div className="row__col-2">
                        <input className="input-sm input-sm--about"
                               type="text"
                               id="reward"
                               placeholder="Number"
                               value={this.props.state.reward}
                               onChange={e => this.handleChange(e, 'reward')}/>
                        <span className="form-text">rewards points for attendance</span>
                    </div>
                </div>
            </div>
        </div>
    }
}

export {About};