import React, {useState, useEffect, useRef} from "react";

const FocusInput = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <h3>Focus Input Example</h3>
            <input ref={inputRef} type="text" placeholder="Type here" />
        </div>
    )
}

export default FocusInput