import React from "react";
import users from "../data/data";
import "./UserCard.css"

function UserCards() {
    return (
        <>
            {users.map((item) => {
                return (
                    <div className="card">  
                        <img src={item.image} alt={item.name} />
                        <h2>Id: {item.id}</h2>
                        <p>Name: {item.name}</p>
                        <p>Age: {item.age}</p>
                        <p>College: {item.college}</p>
                    </div>
                )
            })}
        </>
    )
}

export default UserCards