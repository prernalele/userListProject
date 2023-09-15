import React from "react";
import './ErrorModal.css'

const ErrorModal = (props) => {
    return (
      <div>
        <div className="backOverlay"></div>
        <div className="modal">
          <header className="title">
            <h2> {props.title}</h2>
          </header>
          <p className="message">{props.message}</p>
          <button type="submit" onClick={props.onClickingOk} className="button">
            Okay
          </button>
        </div>
      </div>
    );

}

export default ErrorModal