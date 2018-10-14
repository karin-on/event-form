import React from "react";

import {About} from "./About.jsx";
import {Coordinator} from "./Coordinator.jsx";
import {When} from "./When.jsx";


class Form extends React.Component {
    render() {
        return <div className="container">

            <div className="header">
                <h1 className="header__title">New event</h1>
            </div>
            <div className="content">

                <form className="form">

                    <About/>
                    <Coordinator/>
                    <When/>

                    <input className="form-submit" type="submit" value="Publish event"/>

                </form>
            </div>


        </div>
    }
}

export {Form};