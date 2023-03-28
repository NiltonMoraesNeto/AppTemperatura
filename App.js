import React from "react";
import { NativeBaseProvider } from "native-base";
import Temperatura from "./src/pages/Temperatura";

export default function App() {
  return (
    <NativeBaseProvider>
      <Temperatura />
    </NativeBaseProvider>
  );
};
