import React, { useState } from "react";

const Score = ({ onReplay }) => {
    const [score] = useState(score + 1);

    return (
        <div>
            <h1>Result</h1>
            <h2>Total Score: {score}</h2>
            <button onClick={onReplay}>Replay</button>
        </div>
    );
};

export default Score;
