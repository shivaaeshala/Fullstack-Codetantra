import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }
    const reset = () => {
        setCount(0)
    }

    return(
        <div>
            <h3>Count: {count}</h3>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter