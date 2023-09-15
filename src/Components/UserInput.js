import React, { useState } from "react";
import './UserInput.css'
import ErrorModal from "./ErrorModal";

const UserInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onAgeChange = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 && age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onFormSubmit(name, age);
    setName("");
    setAge("");
  };

  const errorAckHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClickingOk={errorAckHandler}
        />
      )}
      <form className="formClass" onSubmit={submitHandler}>
        <div className="userInputClass">
          <p className="userName">
            <label htmlFor="name" className="nameLabel">
              Username
            </label>
            <p>
              <input
                id="name"
                className="nameInputBox"
                value={name}
                onChange={onNameChange}
              />
            </p>
          </p>
          <p>
            <label htmlFor="age" className="ageLabel">
              Age (Years)
            </label>
            <p>
              <input
                id="age"
                type="number"
                className="ageInputBox"
                value={age}
                onChange={onAgeChange}
              />
            </p>
          </p>
          <button type="submit" className="addUserButtonClass">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserInput