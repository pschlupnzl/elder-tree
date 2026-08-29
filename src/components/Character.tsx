import React from "react";
import { Circle, Rect, rotate } from "@shopify/react-native-skia";

type CharacterProps = {
    x: number;
};

export default function Character({ x }: CharacterProps) {
    return (
        <>
            {/* Legs */}
            <Rect
                x={x - 10}
                y={395}
                width={7}
                height={25}
                color="#3F4A3C"
            />

            <Rect
                x={x + 3}
                y={395}
                width={7}
                height={25}
                color="#3F4A3C"
            />

            {/* Arms */}
            <Rect
                x={x - 20}
                y={380}
                width={7}
                height={25}
                color="#6B4F35"
            />

            <Rect
                x={x + 13}
                y={380}
                width={7}
                height={25}
                color="#6B4F35"
            />

            {/* Body */}
            <Circle
                cx={x}
                cy={390}
                r={18}
                color="#6B4F35"
            />

            {/* Head */}
            <Circle
                cx={x}
                cy={365}
                r={12}
                color="#F2C7A5"
            />
        </>
    );
}