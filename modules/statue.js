import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const loadStatueModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "/models/statue/scene.gltf", // ⚠ lưu ý: bỏ ../public, vì public là root URL
    (gltf) => {
      const statue = gltf.scene;

      // Đặt vị trí
      statue.position.set(0, -3.2, 0);
      statue.scale.set(0.06, 0.06, 0.06);

      // Lặp qua các mesh con
      statue.traverse((child) => {
        if (child.isMesh) {
          // Chỉnh sửa vật liệu
          child.material.metalness = 0.0;
          child.material.roughness = 0.2;
          child.castShadow = true;
        }
      });

      scene.add(statue);
    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the model.", error);
    }
  );
};
