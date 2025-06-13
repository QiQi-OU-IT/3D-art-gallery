import * as THREE from "three";

export const setupFloor = (scene) => {
  const textureLoader = new THREE.TextureLoader();

  // Load the textures (sửa lại đúng tên và định dạng PNG)
  const colorTexture = textureLoader.load(
    "/WoodFloor040_4K-PNG/WoodFloor040_4K-PNG_Displacement.png"
  );
  const displacementTexture = textureLoader.load(
    "/WoodFloor040_4K-PNG/WoodFloor040_4K-PNG_Displacement.png"
  );
  const normalTexture = textureLoader.load(
    "/WoodFloor040_4K-PNG/WoodFloor040_4K-PNG_NormalGL.png"
  );
  const roughnessTexture = textureLoader.load(
    "/WoodFloor040_4K-PNG/WoodFloor040_4K-PNG_Roughness.png"
  );
  const aoTexture = textureLoader.load(
    "/WoodFloor040_4K-PNG/WoodFloor040_4K-PNG_AmbientOcclusion.png"
  );

  // Set texture repeat wrapping
  [colorTexture, displacementTexture, normalTexture, roughnessTexture, aoTexture].forEach(tex => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  });

  const planeGeometry = new THREE.PlaneGeometry(45, 45);
  planeGeometry.attributes.uv2 = planeGeometry.attributes.uv; // cần thiết cho aoMap

  const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
  map: colorTexture,
  side: THREE.DoubleSide,
});


  const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);
  floorPlane.rotation.x = -Math.PI / 2;
  floorPlane.position.y = -8; // sàn nằm ở y = -6

  scene.add(floorPlane);
};
