import React from "react";
import './ListOfUsers.css'

const ListOfUsers = (props) => {
    return (
    <div className="userCard">
        {props.users.map((user)=> {
            return (  
                <p>{user.name} ({user.age} years old)</p>
            )            
        })}

    </div>)
}

export default ListOfUsers