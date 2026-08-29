import React from "react";
import { Circle, Group, Rect, rotate } from "@shopify/react-native-skia";

type CharacterProps = {
    x: number;
    y: number;
};

export default function Character({ x, y }: CharacterProps) {
    return (
        <Group
            transform={[
                { translateX: x },
                { translateY: y }
            ]}
        >
            {/* Legs */}
            <Rect
                x={-10}
                y={10}
                width={7}
                height={25}
                color="#3F4A3C"
            />

            <Rect
                x={+3}
                y={10}
                width={7}
                height={25}
                color="#3F4A3C"
            />

            {/* Arms */}
            <Rect
                x={-20}
                y={-5}
                width={7}
                height={25}
                color="#6B4F35"
                transform={[{ rotate: (.3) }]}
            />

            <Rect
                x={13}
                y={-5}
                width={7}
                height={25}
                color="#6B4F35"
                transform={[{ rotate: (-.3) }]}
            />

            {/* Body */}
            <Circle
                cx={0}
                cy={0}
                r={18}
                color="#6B4F35"
                transform={[{ scaleX: 0.85 }]}
            />

            {/* Head */}
            <Circle
                cx={0}
                cy={-25}
                r={12}
                color="#F2C7A5"
            />
        </Group>
    );
}