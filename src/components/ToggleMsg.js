import React, {useState} from "react"

function TogglgeMsg() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div>
            <button onClick={() => {setIsVisible(!isVisible)}} type="toggle">
                {isVisible ? "Hide" : "Show"}
            </button>
            <br />
            {isVisible ?
            "Message is visbile":
            ""}
        </div>
    )
}

export default TogglgeMsg