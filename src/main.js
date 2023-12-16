import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  middleWall,
  frontWall,
  sideWall,
  sideWall1,
  doorWall,
  doorWall1,
  roof,
} from "./walls";
import DegToRad from "./DegreeToRadious";

let width = window.innerWidth;
let height = window.innerHeight;
let aspectRation = width / height;

export const renderer = new Three.WebGLRenderer();
export const scene = new Three.Scene();
export const camera = new Three.PerspectiveCamera(100, aspectRation, 0.1, 1000);

renderer.shadowMap.enabled = true;
camera.position.set(6, 4, 2);
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

export const orbit = new OrbitControls(camera, renderer.domElement);

scene.add(middleWall);
scene.add(frontWall);
scene.add(sideWall);
scene.add(sideWall1);
scene.add(doorWall);
scene.add(doorWall1);
scene.add(roof);

const axes = new Three.AxesHelper(5);
scene.add(axes);

renderer.render(scene, camera);

const floorGeo = new Three.PlaneGeometry(10, 10);
const floorMaterial = new Three.MeshLambertMaterial({
  color: 0xffffff,
  side: Three.DoubleSide,
});

const floor = new Three.Mesh(floorGeo, floorMaterial);
floor.rotation.x = DegToRad(90);
floor.receiveShadow = true;
scene.add(floor);

const directionalLight = new Three.DirectionalLight(0xffffff, 0.3);
directionalLight.position.set(40, 25, 30);
directionalLight.rotation.z = DegToRad(-45);
directionalLight.rotation.y = DegToRad(-45);
directionalLight.castShadow = true;
scene.add(directionalLight);

/* const dirLightHelper = new Three.DirectionalLightHelper(directionalLight, 5);
scene.add(dirLightHelper); */

const pointLightRoom = new Three.PointLight(0xffffff, 100);
pointLightRoom.position.set(0, 3, 0.5);
pointLightRoom.castShadow = true;
scene.add(pointLightRoom);

function toggleRoomLightOn() {
  pointLightRoom.intensity = 100;
  renderer.render(scene, camera);
}
function toggleRoomLightOff(toggle) {
  pointLightRoom.intensity = 0;
  renderer.render(scene, camera);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("on").addEventListener("click", () => {
    toggleRoomLightOn();
  });
  document.getElementById("off").addEventListener("click", () => {
    toggleRoomLightOff();
  });
});

(function animate() {
  requestAnimationFrame(animate);
  orbit.update();
  renderer.render(scene, camera);
})();

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  aspectRation = width / height;
  camera.aspect = aspectRation;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});
