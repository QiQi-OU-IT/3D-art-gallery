let touchStartX = 0;
let touchStartY = 0;

export const setupTouchCameraControl = (controls) => {
  document.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  });

  document.addEventListener("touchmove", (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const joystickZone = document.getElementById("joystick-container");

      // Nếu joystick đang chiếm vùng chạm thì bỏ qua
      if (joystickZone) {
        const rect = joystickZone.getBoundingClientRect();
        if (
          touch.clientX >= rect.left &&
          touch.clientX <= rect.right &&
          touch.clientY >= rect.top &&
          touch.clientY <= rect.bottom
        ) {
          return; // Không xoay camera nếu chạm trong joystick
        }
      }

      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      const turnSpeed = 0.002;

      controls.getObject().rotation.y -= deltaX * turnSpeed;
      const pitch = controls.getPitchObject();
      pitch.rotation.x -= deltaY * turnSpeed;
      pitch.rotation.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, pitch.rotation.x)
      );

      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    }
  });
};
