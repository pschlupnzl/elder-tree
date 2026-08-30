import {
    Image as SkiaImage,
    useImage
} from "@shopify/react-native-skia";
import React, { useMemo } from "react";
const elderTree = require("../../assets/elder-tree.png");
const forestTree = require("../../assets/forest-tree.png");

type TreeProps = {
    x: number;
    y: number;
    size: number;
    type?: 'elder' | 'forest';
};

export default function Tree({ x, y, size, type = 'forest' }: TreeProps) {
    const imageUri = type === 'elder' ? elderTree.uri : forestTree.uri;
d    const image = useImage(imageUri);

    const { aspectRatio } = useMemo(() => {
        const width = image?.width() ?? 1;
        const height = image?.height() ?? 1;
        return {
            width, height, aspectRatio: width / height
        }
    }, [image]);

    return (image &&
        <SkiaImage
            image={image}
            x={x - aspectRatio * size / 2}
            y={y - size}
            width={aspectRatio * size}
            height={size}
        />
    );
}