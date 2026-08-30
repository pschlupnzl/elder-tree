import React, { useEffect, useState } from "react";
import GrassField from "./src/components/GrassField";
import Character from "./src/components/Character";
import { StyleSheet, View } from "react-native";
import {
  Canvas,
  Circle,
  Rect,
} from "@shopify/react-native-skia";
import Tree from "./src/components/Tree";

const VIEW_TOP = 50;
const VIEW_BOTTOM = 480;
const VIEW_LEFT = 50;
const VIEW_RIGHT = 750;

export default function Game() {
  const [playerX, setPlayerX] = useState(400);
  const [playerY, setPlayerY] = useState(390);
  const [keys, setKeys] = useState({
    left: false,
    right: false,
    up: false,
    down: false
  });


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setKeys((current) => (!current.right ? { ...current, right: true } : current));
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setKeys((current) => (!current.left ? { ...current, left: true } : current));
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setKeys((current) => (!current.up ? { ...current, up: true } : current));
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setKeys((current) => (!current.down ? { ...current, down: true } : current));
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setKeys((current) => ({ ...current, right: false }));
      }
      if (event.key === "ArrowLeft") {
        setKeys((current) => ({ ...current, left: false }));
      }
      if (event.key === "ArrowUp") {
        setKeys((current) => ({ ...current, up: false }));
      }
      if (event.key === "ArrowDown") {
        setKeys((current) => ({ ...current, down: false }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const move = () => {
      if (keys.right) {
        setPlayerX((x) => Math.min(x + 3, VIEW_RIGHT));
      }
      if (keys.left) {
        setPlayerX((x) => Math.max(x - 3, VIEW_LEFT));
      }
      if (keys.down) {
        setPlayerY((y) => Math.min(y + 3, VIEW_BOTTOM));
      }
      if (keys.up) {
        setPlayerY((y) => Math.max(y - 3, VIEW_TOP));
      }
    };

    const interval = setInterval(move, 16);

    return () => clearInterval(interval);
  }, [keys]);

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Rect
          x={0}
          y={0}
          width={800}
          height={600}
          color="#87CEEB"
        />

        <Circle
          cx={650}
          cy={100}
          r={50}
          color="#FFD166"
        />

        <Rect
          x={0}
          y={350}
          width={800}
          height={250}
          color="#718C4A"
        />

        <Circle
          cx={400}
          cy={450}
          r={170}
          color="#A8C686"
        />

        <GrassField />

        <Tree x={192} y={420} size={400} type="elder" />
        <Tree x={650} y={480} size={300} />

        {/* Player */}
        <Character x={playerX} y={playerY} />

      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    flex: 1,
  },
});