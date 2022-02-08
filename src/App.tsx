import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "./components/Earth";
import Clock from "./components/Clock";

function App() {
  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
      <Clock />
    </div>
  );
}

export default App;
