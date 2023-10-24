import React, { useState, useEffect } from "react";

import InteractiveView from "./InteractiveView";

const Random = () => {
    const [randomNumber, setRandomNumber] = useState(0);
    const [innerCount, setInnerCount] = useState(0);

    const onActionHandler = () => {
        setRandomNumber(Math.floor(Math.random() * 1000));
    }

    const onInnerClickHandler = () => {
        setInnerCount(i => i + 1);
    }

    useEffect(() => {
        document.title = `Random Number: ${randomNumber} | My App`;
        console.log('title set');
    }, [randomNumber]);


    console.log('Random Comp Rendered');

    return (
        <>
            <InteractiveView
                value={randomNumber}
                onAction={onActionHandler}
                actionText="Randomize"
            />
            <button
                type="button"
                onClick={onInnerClickHandler}>
                Inner Counter
            </button>
        </>
    );
}

export default Random;