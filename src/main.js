import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
// Mesh initialization
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "burlywood" });
const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
);

scene.add(cubeMesh);


// camera initialization
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);

// const aspectRatio = window.innerWidth / window.innerHeight
// const camera = new THREE.OrthographicCamera(-1* aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 10000);
camera.position.z = 5;
scene.add(camera);

const canvas = document.querySelector("#canvas");

// renderer initialization
const renderer = new THREE.WebGLRenderer({ canvas });

const controls = new OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix()
})

function animate() {
  controls.update()
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate)
}

animate()