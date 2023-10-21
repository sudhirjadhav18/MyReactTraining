import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const onClickHandler = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <p>{counter}</p>
            <button type="button" onClick={onClickHandler}>Increment</button>
        </>
    );
}

export default Counter;