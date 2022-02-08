import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, DoubleSide } from "three";
import { OrbitControls, Stars } from "@react-three/drei";

import EarthNightMap from "../images/8k_earth_nightmap.jpg";
import EarthSpecularMap from "../images/8k_earth_specular_map.jpg";
import EarthNormalMap from "../images/8k_earth_normal_map.jpg";
import EarthClouds from "../images/8k_earth_clouds.jpg";

const Earth = () => {
  // Textures
  const [earthNightMap, earthNormalMap, earthSpecularMap, earthClouds] =
    useLoader(TextureLoader, [
      EarthNightMap,
      EarthNormalMap,
      EarthSpecularMap,
      EarthClouds,
    ]);

  return (
    <>
      <ambientLight intensity={1.2} color={"white"} />
      <pointLight color={"white"} position={[2, 0, 5]} intensity={1.6} />
      <Stars
        radius={300}
        depth={10}
        count={20000}
        factor={5}
        fade={true}
        saturation={0}
      />
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial
          map={earthClouds}
          opacity={0.1}
          depthWrite={true}
          transparent={true}
          side={DoubleSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.9, 32, 32]} />
        <meshPhongMaterial specularMap={earthSpecularMap} />
        <meshStandardMaterial
          map={earthNightMap}
          normalMap={earthNormalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls autoRotate zoomSpeed={0.4} rotateSpeed={0.4} />
      </mesh>
    </>
  );
};

export default Earth;
