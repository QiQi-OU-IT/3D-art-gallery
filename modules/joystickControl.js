import nipplejs from "nipplejs";
import { keysPressed } from "./movement.js";

export const setupJoystickControl = () => {
  const joystick = nipplejs.create({
    zone: document.getElementById("joystick-container"),
    mode: "static",
    position: { left: "60px", bottom: "60px" },
    color: "white",
  });

  joystick.on("move", (evt, data) => {
    const angle = data.angle.degree;
    keysPressed.w = keysPressed.a = keysPressed.s = keysPressed.d = false;

    if (angle >= 45 && angle < 135) {
      keysPressed.w = true;
    } else if (angle >= 135 && angle < 225) {
      keysPressed.a = true;
    } else if (angle >= 225 && angle < 315) {
      keysPressed.s = true;
    } else {
      keysPressed.d = true;
    }
  });

  joystick.on("end", () => {
    keysPressed.w = keysPressed.a = keysPressed.s = keysPressed.d = false;
  });
};
