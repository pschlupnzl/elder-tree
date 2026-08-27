import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Canvas,
  Circle,
  Rect,
} from "@shopify/react-native-skia";

export default function Game() {
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
          color="#6B8E23"
        />

        <Circle
          cx={400}
          cy={450}
          r={170}
          color="#A8C686"
        />
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