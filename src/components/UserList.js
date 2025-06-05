import React, { useState, useEffect } from "react";

const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        // fetch("https://api.open-meteo.com/v1/forecast?latitdue=17.4065&longitue=78.4772")
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if(!response.ok){
                    throw new Error("Error occurred")
                }
                return response.json()
            })
            .then((data) => {
                setUsers(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if(loading) return <p>Loading...</p>
    if(error) return <p style={{color:"red"}}>Error: {error}</p>

    return (
        <ul>
            {
                users.map((user) => {
                    return (
                        <li key={user.id}>
                            <strong>{user.name}</strong> ({user.email})
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default UserList