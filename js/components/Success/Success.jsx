import React from "react";


class Success extends React.Component {
    render() {
        return <div className="success">
            <div className="success__header">
                <h2 className="success__title">Success</h2>
            </div>
            <span className="add-text">Event has been created.</span>
        </div>
    }
}

export {Success};