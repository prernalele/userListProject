import React from "react";
import './ErrorModal.css'

const ErrorModal = (props) => {
    return (
        <div>
            <header>
                <h2> {props.error.title}</h2>
            </header>
            <p>
                {props.error.message}
            </p>
        </div>
    )

}

export default ErrorModal