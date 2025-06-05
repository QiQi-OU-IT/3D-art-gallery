import * as THREE from "three";
import { displayPaintingInfo, hidePaintingInfo } from "./paintingInfo.js";
import { updateMovement } from "./movement.js";

export const setupRendering = (
  scene,
  camera,
  renderer,
  paintings,
  controls,
  walls
) => {
  const clock = new THREE.Clock();

  let render = function () {
    const delta = clock.getDelta();

    updateMovement(delta, controls, camera, walls);

    const distanceThreshold = 8;
    const angleThreshold = THREE.MathUtils.degToRad(30); // ~30 độ
    let paintingToShow;

    paintings.forEach((painting) => {
      const distanceToPainting = camera.position.distanceTo(painting.position);

      if (distanceToPainting < distanceThreshold) {
        // Tính hướng nhìn của camera
        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);

        // Vector từ camera đến tranh
        const toPainting = new THREE.Vector3()
          .subVectors(painting.position, camera.position)
          .normalize();

        const dot = cameraDirection.dot(toPainting);
        const isLookingAtPainting = dot > Math.cos(angleThreshold);

        if (isLookingAtPainting) {
          paintingToShow = painting;
        }
      }
    });

    if (paintingToShow) {
      displayPaintingInfo(paintingToShow.userData.info);
    } else {
      hidePaintingInfo();
    }

    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  render();
};
