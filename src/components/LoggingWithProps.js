import React from "react";

function LoggingWithProps({isLogged}){
    return (
        <>
            {isLogged ? 
            <h1>Welcome, Sadha</h1> :
            <h1>Please login</h1>}
        </>
    )
}

export default LoggingWithProps