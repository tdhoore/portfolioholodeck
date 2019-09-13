import { CSS3DObject, CSS3DRenderer } from "three-renderer-css3d";
import * as THREE from "three";

export default class Css3DScene {
  constructor(
    params = {
      container: false,
      camera: false,
      width: window.innerWidth,
      height: window.innerHeight,
      className: ""
    }
  ) {
    this.container = params.container;
    this.className = params.className;

    this.renderer = new CSS3DRenderer();
    this.scene = new THREE.Scene();
    this.camera = params.camera;

    this.width = params.width;
    this.height = params.height;
  }

  setSize(width = this.width, height = this.height) {
    this.width = width;
    this.height = height;

    //set the CSS3D renderersize
    if (this.renderer) {
      this.renderer.setSize(width, height);
    }
  }

  addObject(
    param = {
      elem: false,
      pos: new THREE.Vector3(),
      rot: new THREE.Euler()
    }
  ) {
    if (param.elem) {
      const obj = new CSS3DObject(param.elem);

      //set position
      obj.position.copy(param.pos).multiplyScalar(100);

      //set rotation
      obj.rotation.copy(param.rot);

      //add the object to the scene
      this.scene.add(obj);
    }
  }

  removeObject(obj) {
    this.scene.remove(obj);
  }

  render() {
    //position scale to match three scene
    this.camera.position.multiplyScalar(100);
    this.renderer.render(this.scene, this.camera);
    this.camera.position.divideScalar(100);

    requestAnimationFrame(() => this.render());
  }

  setup() {
    //set class name
    if (this.className !== "") {
      this.renderer.domElement.classList.add(this.className);
    }

    //append to the container
    if (this.container) {
      this.container.appendChild(this.renderer.domElement);
    }

    //start render
    requestAnimationFrame(() => this.render());
  }
}
