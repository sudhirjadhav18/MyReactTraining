import React, { useState } from "react";

import InteractiveView from "./InteractiveView";

const Random = () => {
    const [randomNumber, setRandomNumber] = useState(0);

    const onActionHandler = () => {
        setRandomNumber(Math.floor(Math.random() * 1000));
    }

    return (
        <InteractiveView
            value={randomNumber}
            onAction={onActionHandler}
            actionText="Randomize"
        />
    );
}

export default Random;