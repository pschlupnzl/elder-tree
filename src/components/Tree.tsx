import {
    Image as SkiaImage,
    useImage
} from "@shopify/react-native-skia";
import React from "react";

type TreeProps = {
    x: number;
    y: number;
    size: number;
};

export default function Tree({ x, y, size }: TreeProps) {
    const image = useImage(require("../../assets/elder-tree.png").uri);

    if (!image) {
        return null;
    }

    return (
        <SkiaImage
            image={image}
            x={x - 175}
            y={y - 200}
            width={size}
            height={size * 1.14}
        />
    );
}