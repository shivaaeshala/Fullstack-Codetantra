import React, {useState} from "react";

function ThemeTogglge() {
    const [theme, setTheme] = useState(true)
    const styles = {
        background: theme ? "white": "black",
        color: theme ? "black" : "white",
        // width: "100%",
        height: "100vh",
        margin: "auto"
    }

    return(
        <div style={styles}>
            <button onClick={() => {setTheme(!theme)}}>Change to {theme? "Dark mode": "White mode"}</button>
            <h3>This is the example to toggle to between dark and white modes</h3>
        </div>
    )
}

export default ThemeTogglge