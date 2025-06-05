import React from "react"

function PropsWithStyling({msg}) {
    return (
        <h2 style={{color:'blue'}}>{msg}</h2>
    )
}

export default PropsWithStyling