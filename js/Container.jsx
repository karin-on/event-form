import React from "react";

import {Form} from "./Form.jsx";
import {Success} from "./Success.jsx";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            success: false
        }
    }

    isSuccess = (success) => {
        this.setState({
            success: success
        })
    };

    render() {
        return <div className="container">

            <div className="header">
                <h1 className="header__title">New event</h1>
            </div>

            <div className="content">

                {this.state.success ? <Success/> : <Form isSuccess={this.isSuccess}/>}

            </div>

        </div>
    }
}

export {Container};