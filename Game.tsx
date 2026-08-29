import React, { useEffect, useState } from "react";
import Character from "./src/components/Character";
import { StyleSheet, View } from "react-native";
import {
  Canvas,
  Circle,
  Rect,
} from "@shopify/react-native-skia";

const VIEW_LEFT = 50;
const VIEW_RIGHT = 750;

export default function Game() {
  const [playerX, setPlayerX] = useState(400);
  const [keys, setKeys] = useState({
    left: false,
    right: false,
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
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setKeys((current) => ({ ...current, right: false }));
      }
      if (event.key === "ArrowLeft") {
        setKeys((current) => ({ ...current, left: false }));
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
        setPlayerX((x) => Math.min(x + 3, 750));
      }

      if (keys.left) {
        setPlayerX((x) => Math.max(x - 3, 50));
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

        {/* First tree trunk */}
        <Rect
          x={170}
          y={220}
          width={45}
          height={180}
          color="#6B4F35"
        />

        {/* First tree canopy */}
        <Circle
          cx={192}
          cy={190}
          r={90}
          color="#4F6F3A"
        />

        {/* Player */}
        <Character x={playerX} />

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