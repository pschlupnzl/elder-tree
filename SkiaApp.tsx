import React from "react";
import { Text, View } from "react-native";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";

export default function SkiaApp() {
  return (
<WithSkiaWeb
  getComponent={() => import("./Game")}
  getWasmUrl={() => "/canvaskit.wasm"}
  fallback={
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading Elder Tree...</Text>
    </View>
  }
/>
  );
}