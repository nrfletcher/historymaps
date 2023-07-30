"use client";
import { useState } from "react";

let Clicker = () => {
    let [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={incrementCount}>{"Count is: " + count}</button>
        </div>
    )
}

export default Clicker;