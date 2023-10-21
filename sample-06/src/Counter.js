import React, { useState } from "react";

const CounterView = ({ counterValue, onIncrement }) => (
    <>
        <p>{counterValue}</p>
        <button type="button" onClick={onIncrement}>Increment</button>
    </>
);

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const onClickHandler = () => {
        setCounter(counter + 1);
    }

    return (
        <CounterView
            counterValue={counter}
            onIncrement={onClickHandler}
        />
    );
}

export default Counter;