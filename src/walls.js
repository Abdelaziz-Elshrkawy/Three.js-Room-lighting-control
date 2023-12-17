import BlockGenerator from "./Block";
import DegToRad from "./DegreeToRadius;
import { wallColor } from "./colors";

const y = 3;
const x = 3;

export const middleWall = BlockGenerator(4, y, 0.1, wallColor);
middleWall.position.y = y / 1.99;
middleWall.position.z = -1;
middleWall.castShadow = true;

export const frontWall = BlockGenerator(4, y, 0.1, wallColor);
frontWall.position.y = y / 1.99;
frontWall.position.z = 2;
frontWall.castShadow = true;

export const sideWall = BlockGenerator(x, y, 0.1, wallColor);
sideWall.position.y = y / 1.99;
sideWall.position.x = -2;
sideWall.position.z = x / 2 -1;
sideWall.rotation.y = DegToRad(90);
sideWall.castShadow = true;

export const sideWall1 = BlockGenerator(x, 1.5, 0.1, wallColor);
sideWall1.position.y = 2.25;
sideWall1.position.x = 2;
sideWall1.position.z = x / 2 -1;
sideWall1.rotation.y = DegToRad(90);
sideWall1.castShadow = true;

export const doorWall = BlockGenerator(1, 1.5, 0.1, wallColor);
doorWall.position.y = 0.75;
doorWall.position.x = 2;
doorWall.position.z = -0.5;
doorWall.rotation.y = DegToRad(90);
doorWall.castShadow = true;

export const doorWall1 = BlockGenerator(1, 1.5, 0.1, wallColor);
doorWall1.position.y = 0.75;
doorWall1.position.x = 2;
doorWall1.position.z = 1.5;
doorWall1.rotation.y = DegToRad(90);
doorWall1.castShadow = true;

export const roof = BlockGenerator(4, y, 0.1, wallColor);
roof.position.y = y;
roof.position.z = 0.5;
roof.rotation.x = DegToRad(90);
roof.castShadow = true;



