import React, { useState } from "react";
import './UserInput.css'
import ErrorModal from "./ErrorModal";

const UserInput = (props) => {
   const [inputValue, setInputValue] = useState()
   const [error, setError] = useState()
   const newList = []

    const onChangeHandler = (inputType, value) => (
        
         setInputValue((prevInput) => {
            console.log("prevInput", prevInput)
            return {
                ...prevInput,
            [inputType]: value,
            }
            
        })

    )

    const submitHandler = (event) => {
        event.preventDefault()
        if(inputValue.name.trim().length === 0 && inputValue.age.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
        return
        }
        if( inputValue.age < 1) {
            setError({
                title: 'Invalid Age',
                message: "Please enter a valid age (>0)"
            })
            return;
        }
        newList.push(inputValue)
        props.onFormSubmit(newList)
    }

    return (
        <div>
            { error && <ErrorModal title={error.title} message={error.message}/> }
            <form className="formClass" onSubmit={submitHandler}>
            <div className="userInputClass">
            <p className="userName">
            <label htmlFor="name" className="nameLabel">Username</label>
            <p><input id="name" className="nameInputBox" onChange={(event) => onChangeHandler('name', event.target.value)}/></p> 
            </p>
            <p>
            <label htmlFor="age" className="ageLabel">Age (Years) </label>
            <p><input id="age" type="number" className="ageInputBox" onChange={(event) => onChangeHandler('age', event.target.value)}/></p>
            </p>
            <button type="submit" className="addUserButtonClass"> Add User</button>
            </div>
        </form>
        </div>

    )
}

export default UserInput