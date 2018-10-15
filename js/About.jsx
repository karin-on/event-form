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
            price: '',
            reward: ''
        }
    }

    handleChange = (e, element) => {
        if (element === 'reward' || element === 'price') {
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
        let descrLength = this.state.description.length;
        let categoriesOptions = categories.map(el => {
            return <option value={el.id} key={el.id}>{el.name}</option>
        });
        let payment = this.state.payment;
        let priceClass = (JSON.parse(payment)) ? "price-wrapper" : "price-wrapper display-none";

        // console.log(this.props.titleValid);

        let titleLabelClass = this.props.titleValid ?
                            'label' :
                            'label error';
        let titleInputClass = this.props.titleValid ?
                            'input-lg' :
                            'input-lg error';
        let titleMsgClass = this.props.titleValid ?
                            'error-msg-title display-none' :
                            'error-msg-title';


        let descriptionLabelClass = this.props.descriptionValid ?
                                'label label__description' :
                                'label label__description error';
        let descriptionClass = this.props.descriptionValid ?
                                'input-lg input-descr' :
                                'input-lg input-descr error';
        let descriptionMsgClass = this.props.descriptionValid ?
                                'error-msg-descr display-none' :
                                'error-msg-descr';


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
                        <textarea className={descriptionClass}
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
                        <select className="input-lg"
                                name="category"
                                id="category"
                                value={this.state.category}
                                onChange={e => this.handleChange(e, 'category')}>

                            <option value="">Select category (skills, interests, locations)</option>
                            {categoriesOptions}
                        </select>
                        <span className="input-descr__note">
                            Describes topic and people who should be interested in this event
                        </span>
                    </div>
                </div>

                <div className="section__row row-3">
                    <span className="payment-title">Payment</span>
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

                    <span className={priceClass}>
                        <input className="input-sm input-sm--about"
                               type="text"
                               id="price"
                               placeholder="Fee"
                               value={this.state.price}
                               onChange={e => this.handleChange(e, 'price')}/>
                        <span className="add-text">$</span>
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