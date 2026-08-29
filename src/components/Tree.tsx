import React from "react";
import { Circle, Rect } from "@shopify/react-native-skia";

type TreeProps = {
    x: number;
    y: number;
};

export default function Tree({ x, y }: TreeProps) {
    return (
        <>
            {/* Trunk */}
            <Rect
                x={x - 22}
                y={y}
                width={44}
                height={180}
                color="#6B4F35"
            />

            {/* Canopy */}
            {/* Main canopy */}
            <Circle
                cx={x}
                cy={y - 55}
                r={75}
                color="#385C36"
            />

            {/* Left canopy */}
            <Circle
                cx={x - 50}
                cy={y - 35}
                r={55}
                color="#4C7040"
            />

            {/* Right canopy */}
            <Circle
                cx={x + 50}
                cy={y - 30}
                r={60}
                color="#45683C"
            />

            {/* Top canopy */}
            <Circle
                cx={x + 5}
                cy={y - 105}
                r={48}
                color="#527B45"
            />
        </>
    );
}