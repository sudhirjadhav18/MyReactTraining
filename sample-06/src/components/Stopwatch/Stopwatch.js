import React, { useEffect, useState } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [active, setActivate] = useState(true);

    useEffect(() => {
        let interval = null;
        if (active) {
            interval = setInterval(() => {
                setTime(t => t + 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        }
    }, [active]);

    const onClickHandler = () => {
        setActivate(a => !a);
    }

    const formattedTime = new Date(time * 1000)
        .toISOString()
        .substr(11, 8);

    return (
        <section className="stop-watch _center">
            <h1 className="stop-watch__heading">Stopwatch</h1>
            <p>{formattedTime}</p>
            <button
                type="button"
                onClick={onClickHandler}>
                Stop/Start
            </button>
        </section>
    );
}

export default Stopwatch;