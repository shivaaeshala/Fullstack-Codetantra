// import React, {useState} from "react";

function ConditionalRendering1({user}) {
    // if(isLogged){
    //     return (
    //         <h2>Welcome</h2>
    //     )
    // }
    // else{
    //     return (
    //         <h2>Plesase login</h2>
    //     )
    // }


    // return (

    //     isLogged ? (
    //             <h2>Welcome</h2>
    //         ):
    //     (
    //             <h2>Plesase login</h2>
    //         )
    // )

    // return (
    //     <div>
    //         {isLogged && <h2>Welcome</h2>}
    //         {!isLogged && <h2>Login</h2>}
    //         {isLogged && count > 0 && <p>The count is {count}</p>}
    //     </div>
    // )

    // Switch case
    // switch (status) {
    //     case "loading":
    //         return (<p>Loading</p>)
    //     case "sucess":
    //         return (<p>Welcome</p>)
    //     case "error":
    //         return(<p>Error</p>)
    //     default:
    //         return(<p>Status unknown</p>)
    // }


    switch (user) {
        case "admin":
            return (<p>Welcome admin</p>)
        case "guest":
            return (<p>Welcome guest</p>)
        default:
            return (<p>Welcome unknown user</p>)
    }
}

export default ConditionalRendering1