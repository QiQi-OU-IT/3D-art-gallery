import * as THREE from "three";

export function createWalls(scene, textureLoader) {
  let wallGroup = new THREE.Group();
  scene.add(wallGroup);

  // Load ảnh Cloudinary làm texture cho từng tường
  const textureURL = "https://res.cloudinary.com/dmq2o3dzp/image/upload/v1749718715/wall-background_gmtmgb.png";

  const frontTexture = textureLoader.load(textureURL);
  const backTexture = textureLoader.load(textureURL);
  const leftTexture = textureLoader.load(textureURL);
  const rightTexture = textureLoader.load(textureURL);

  // Không lặp ảnh để tránh vỡ hình
  [frontTexture, backTexture, leftTexture, rightTexture].forEach(tex => {
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  });

  // Tạo material riêng cho từng tường
  const frontMat = new THREE.MeshStandardMaterial({ map: frontTexture, side: THREE.DoubleSide });
  const backMat = new THREE.MeshStandardMaterial({ map: backTexture, side: THREE.DoubleSide });
  const leftMat = new THREE.MeshStandardMaterial({ map: leftTexture, side: THREE.DoubleSide });
  const rightMat = new THREE.MeshStandardMaterial({ map: rightTexture, side: THREE.DoubleSide });

  // Front Wall
  const frontWall = new THREE.Mesh(new THREE.BoxGeometry(80, 20, 0.001), frontMat);
  frontWall.position.z = -20;

  // Back Wall
  const backWall = new THREE.Mesh(new THREE.BoxGeometry(80, 20, 0.001), backMat);
  backWall.position.z = 20;

  // Left Wall
  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(80, 20, 0.001), leftMat);
  leftWall.rotation.y = Math.PI / 2;
  leftWall.position.x = -20;

  // Right Wall
  const rightWall = new THREE.Mesh(new THREE.BoxGeometry(80, 20, 0.001), rightMat);
  rightWall.rotation.y = Math.PI / 2;
  rightWall.position.x = 20;

  // Thêm tất cả vào nhóm
  wallGroup.add(frontWall, backWall, leftWall, rightWall);

  return wallGroup;
}
