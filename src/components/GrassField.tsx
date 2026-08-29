import React from "react";
import GrassTuft from "./GrassTuft";

export default function GrassField() {
    return (
        <>
            <GrassTuft x={300} y={420} />
            <GrassTuft x={500} y={440} />
            <GrassTuft x={250} y={470} />
            <GrassTuft x={600} y={400} />
            <GrassTuft x={450} y={500} />
        </>
    );
}