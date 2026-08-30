import {
    Image as SkiaImage,
    useImage
} from "@shopify/react-native-skia";
import React from "react";
const elderTree = require("../../assets/elder-tree.png")
const forestTree = require("../../assets/forest-tree.png")

type TreeProps = {
    x: number;
    y: number;
    size: number;
    type?: 'elder' | 'forest';
};

export default function Tree({ x, y, size, type = 'forest' }: TreeProps) {

    const image = useImage(
        type === 'elder' ? elderTree.uri : forestTree.uri);

    if (!image) {
        return null;
    }

    const width = image.width();
    const height = image.height();
    const aspectRatio = width / height;

    return (
        <SkiaImage
            image={image}
            x={x - aspectRatio * size / 2}
            y={y - size}
            width={aspectRatio * size}
            height={size}
        />
    );
}