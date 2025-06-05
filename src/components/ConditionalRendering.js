import React from "react"

function Aa() {
    const isLogged = true
    return (
        <h2>
            {isLogged ? "Logged in" : "Not logged in"}
        </h2>
    )
}

export default Aa