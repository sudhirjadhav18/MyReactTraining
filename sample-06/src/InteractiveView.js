import React, { useEffect } from "react";

const InteractiveView = ({ value, onAction, actionText }) => {
    useEffect(() => {
        console.log('Interactive Comp loaded');

        return () => {
            console.log('Interactive comp destroyed');
        };
    }, []);

    return (
        <>
            <p>{value}</p>
            <button
                type="button"
                onClick={onAction}>
                {actionText}
            </button>
        </>
    );
};

export default InteractiveView;