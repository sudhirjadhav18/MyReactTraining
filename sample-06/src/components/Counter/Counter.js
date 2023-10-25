import React, { useState } from "react";

import InteractiveView from "../InteractiveView/InteractiveView";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [show, setShow] = useState(true);
    const onClickHandler = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            {show &&
                <InteractiveView
                    value={counter}
                    onAction={onClickHandler}
                    actionText="Increment"
                />
            }
            <button type="button" onClick={() => setShow(x => !x)}>
                show/hide Interactive
            </button>
        </>
    );
}

export default Counter;