import React from "react"

function InlineStyling() {
    const isImportant = true
    const styleObj = {
        color: isImportant ? "red" : "green",
        fontWeight: isImportant ? "bold" : "normal",
        backgroundColor: "lightyellow",
        padding: "10px",
        margin: "auto",
        borderRadius: "10px"
    }

    return (
        <div style={styleObj}>
            <h2>Important Notice!</h2>
            <p>This block is for JSX styling</p>
        </div>
    )
}

export default InlineStyling