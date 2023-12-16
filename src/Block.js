import * as Three from "three";

export default function BlockGenerator(x, y, z, color) {
  const boxGeo = new Three.BoxGeometry(x, y, z);
  const boxMaterial = new Three.MeshLambertMaterial({
    color: color,
    wireframe: false,
  });
  const cube = new Three.Mesh(boxGeo, boxMaterial);
  return cube;
}
