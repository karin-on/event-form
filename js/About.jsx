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
            reward: ''
        }
    }

    handleChange = (e, element) => {
        if (element === 'reward') {
            const reward = e.target.value.replace(/\D/g, '');
            this.setState({
                reward: reward
            });

            if (typeof this.props.handleFormChange === 'function') {
                this.props.handleFormChange(reward, 'reward');
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


        return <div className="form__section section__about">
            <div className="section__header">
                <h2 className="section__title">About</h2>
            </div>

            <div className="section__content">

                <div className="section__row">
                    <label className="label"
                           htmlFor="title">
                        Title&nbsp;<span>*</span>
                    </label>
                    <input className="input-lg"
                           type="text"
                           id="title"
                           placeholder="Make it short and clear"
                           value={this.state.title}
                           onChange={e => this.handleChange(e, 'title')}/>
                </div>

                <div className="section__row">
                    <label className="label label__description"
                           htmlFor="description">
                        Description&nbsp;<span>*</span>
                    </label>

                    <div className="input-descr__wrapper">
                        <textarea className="input-lg input-descr"
                                  id="description"
                                  placeholder="Write about your event, be creative"
                                  value={this.state.description}
                                  onChange={e => this.handleChange(e, 'description')}/>
                        <span className="input-descr__note">Max length 140 characters</span>
                        <span className="input-descr__char">{descrLength}/140</span>
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

                <div className="section__row">
                    <input type="radio"
                           name="payment"
                           id="payment-free"
                           value={false}
                           onChange={e => this.handleChange(e, 'payment')} defaultChecked/>
                    <label className="label__payment"
                           htmlFor="payment">Free</label>

                    <input type="radio"
                           name="payment"
                           id="payment-paid"
                           value={true}
                           onChange={e => this.handleChange(e, 'payment')}/>
                    <label className="label__payment"
                           htmlFor="payment">Paid</label>
                </div>

                <div className="section__row">
                    <label className="label"
                           htmlFor="reward">Reward</label>
                    <input className="input-sm"
                           type="text"
                           id="reward"
                           placeholder="Number"
                           value={this.state.reward}
                           onChange={e => this.handleChange(e, 'reward')}/>
                    <span className="add-descr">rewards points for attendance</span>
                </div>
            </div>
        </div>
    }
}

export {About};