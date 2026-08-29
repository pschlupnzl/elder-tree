import React from "react";
import { Rect } from "@shopify/react-native-skia";

type GrassTuftProps = {
    x: number;
    y: number;
};

export default function GrassTuft({ x, y }: GrassTuftProps) {
    return (
        <>
            <Rect
                x={x}
                y={y}
                width={4}
                height={25}
                color="#3F5F35"
            />

            <Rect
                x={x - 6}
                y={y + 4}
                width={4}
                height={21}
                color="#3F5F35"
            />

            <Rect
                x={x + 6}
                y={y + 2}
                width={4}
                height={23}
                color="#3F5F35"
            />
        </>
    );
}