import React from "react";

import categories from "../data/categories";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title: '',
            description: '',
            category: '',
            payment: false,
            fee: '',
            reward: ''
        }
    }

    handleChange = (e, element) => {

        if (element === 'reward' || element === 'fee') {
            const value = e.target.value.replace(/\D/g, '');
            this.setState({
                [element]: value
            });

            if (typeof this.props.handleFormChange === 'function') {
                this.props.handleFormChange(value, element);
            }

        } else {
            this.setState({
                [element]: e.target.value
            });

            if (typeof this.props.handleFormChange === 'function') {
                this.props.handleFormChange(e.target.value, element);
            }
        }
    };

    render() {
        const descrLength = this.state.description.length;
        const categoriesOptions = categories.map(el => {
            return <option value={el.id} key={el.id}>{el.name}</option>
        });


        const titleLabelClass = this.props.titleValid ?
                            'label' :
                            'label error';
        const titleInputClass = this.props.titleValid ?
                            'input-lg' :
                            'input-lg error';
        const titleMsgClass = this.props.titleValid ?
                            'error-msg-title display-none' :
                            'error-msg-title';

        const descriptionLabelClass = this.props.descriptionValid ?
                                'label label__description' :
                                'label label__description error';
        const descriptionAreaClass = this.props.descriptionValid ?
                                'input-lg input-descr' :
                                'input-lg input-descr error';
        const descriptionMsgClass = this.props.descriptionValid ?
                                'error-msg-descr display-none' :
                                'error-msg-descr';

        const payment = this.state.payment;
        const feeWrapperClass = (JSON.parse(payment)) ?
                                "input-sm__wrapper" :
                                "input-sm__wrapper display-none";

        const feeLabelClass = this.props.feeValid ?
                                "payment-title" :
                                "payment-title error";
        const feeInputClass = this.props.feeValid ?
                                "input-sm input-sm--about" :
                                "input-sm input-sm--about error";
        const feeMsgClass = this.props.feeValid ?
                                'error-msg-fee display-none' :
                                'error-msg-fee';


        return <div className="form__section section__about">
            <div className="section__header">
                <h2 className="section__title">About</h2>
            </div>

            <div className="section__content">

                <div className="section__row">
                    <label className={titleLabelClass}
                           htmlFor="title">
                        Title&nbsp;<span>*</span>
                    </label>

                    <div className="input-title__wrapper">
                        <input className={titleInputClass}
                               type="text"
                               id="title"
                               placeholder="Make it short and clear"
                               value={this.state.title}
                               onChange={e => this.handleChange(e, 'title')}/>

                        <span className={titleMsgClass}>
                            Title cannot be empty
                            <span className="caret">
                                <i className="fa fa-caret-left" aria-hidden="true"></i>
                            </span>
                        </span>
                    </div>
                </div>

                <div className="section__row">
                    <label className={descriptionLabelClass}
                           htmlFor="description">
                        Description&nbsp;<span>*</span>
                    </label>

                    <div className="input-descr__wrapper">
                        <textarea className={descriptionAreaClass}
                                  id="description"
                                  placeholder="Write about your event, be creative"
                                  value={this.state.description}
                                  onChange={e => this.handleChange(e, 'description')}/>
                        <span className="input-descr__note">Max length 140 characters</span>
                        <span className="input-descr__char">{descrLength}/140</span>

                        <span className={descriptionMsgClass}>
                            Description cannot be empty
                            <span className="caret">
                                <i className="fa fa-caret-left" aria-hidden="true"></i>
                            </span>
                        </span>
                    </div>
                </div>

                <div className="section__row">
                    <label className="label"
                           htmlFor="category">Category</label>

                    <div className="select-category__wrapper">

                        <span className="custom-select">
                            <select name="category"
                                    id="category"
                                    value={this.state.category}
                                    onChange={e => this.handleChange(e, 'category')}>

                            <option>Select category (skills, interests, locations)</option>
                            {categoriesOptions}
                            </select>
                        </span>
                        <span className="input-descr__note">
                            Describes topic and people who should be interested in this event
                        </span>
                    </div>
                </div>

                <div className="section__row row-3">
                    <span className={feeLabelClass}>Payment&nbsp;<span>*</span></span>
                    <input type="radio"
                           name="payment"
                           id="payment-free"
                           value={false}
                           onChange={e => this.handleChange(e, 'payment')} defaultChecked/>
                    <label className="label__payment"
                           htmlFor="payment">Free event</label>

                    <input type="radio"
                           name="payment"
                           id="payment-paid"
                           value={true}
                           onChange={e => this.handleChange(e, 'payment')}/>
                    <label className="label__payment"
                           htmlFor="payment">Paid event</label>

                    <span className={feeWrapperClass}>
                        <input className={feeInputClass}
                               type="text"
                               id="fee"
                               placeholder="Fee"
                               value={this.state.fee}
                               onChange={e => this.handleChange(e, 'fee')}/>
                        <span className="add-text">$</span>

                        <span className={feeMsgClass}>
                            Fee cannot be empty
                            <span className="caret">
                                <i className="fa fa-caret-left" aria-hidden="true"></i>
                            </span>
                        </span>
                    </span>
                </div>

                <div className="section__row">
                    <label className="label"
                           htmlFor="reward">Reward</label>
                    <input className="input-sm input-sm--about"
                           type="text"
                           id="reward"
                           placeholder="Number"
                           value={this.state.reward}
                           onChange={e => this.handleChange(e, 'reward')}/>
                    <span className="add-text">rewards points for attendance</span>
                </div>
            </div>
        </div>
    }
}

export {About};