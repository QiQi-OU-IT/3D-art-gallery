import * as THREE from "three";

export const createCeiling = (scene, textureLoader) => {
  const colorTexture = textureLoader.load("/OfficeCeiling005_4K-PNG/OfficeCeiling005_4K-PNG_Color.png");
  const displacementTexture = textureLoader.load("/OfficeCeiling005_4K-PNG/OfficeCeiling005_4K-PNG_Displacement.png");
  const aoTexture = textureLoader.load("/OfficeCeiling005_4K-PNG/OfficeCeiling005_4K-PNG_AmbientOcclusion.png");
  const emissionTexture = textureLoader.load("/OfficeCeiling005_4K-PNG/OfficeCeiling005_4K-PNG_Emission.png");
  const metalnessTexture = textureLoader.load("/OfficeCeiling005_4K-PNG/OfficeCeiling005_4K-PNG_Metalness.png");
  const normalGLTexture = textureLoader.load("/OfficeCeiling005_4K-PNG/OfficeCeiling005_4K-PNG_NormalGL.png");
  const roughnessTexture = textureLoader.load("/OfficeCeiling005_4K-PNG/OfficeCeiling005_4K-PNG_Roughness.png");

  // Repeat wrap
  [
    colorTexture,
    displacementTexture,
    aoTexture,
    emissionTexture,
    metalnessTexture,
    normalGLTexture,
    roughnessTexture,
  ].forEach(tex => tex.wrapS = tex.wrapT = THREE.RepeatWrapping);

  const ceilingGeometry = new THREE.PlaneGeometry(45, 40);
  ceilingGeometry.attributes.uv2 = ceilingGeometry.attributes.uv;

  const ceilingMaterial = new THREE.MeshStandardMaterial({
    map: colorTexture,
    displacementMap: displacementTexture,
    aoMap: aoTexture,
    emissiveMap: emissionTexture,
    metalnessMap: metalnessTexture,
    normalMap: normalGLTexture,
    roughnessMap: roughnessTexture,
    displacementScale: 0.1,
    side: THREE.DoubleSide,
  });

  const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
  ceilingPlane.rotation.x = Math.PI / 2;
  ceilingPlane.position.y = 10;

  scene.add(ceilingPlane);
};
