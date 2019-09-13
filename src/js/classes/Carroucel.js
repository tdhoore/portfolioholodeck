import Css3DScene from "./Css3DScene.js";
import Animator from "./Animator.js";
import TWEEN from "tween";
import * as THREE from "three";
import { TetrahedronGeometry } from "three";

export default class Carroucel extends Css3DScene {
  constructor(
    params = {
      allSlides: [],
      currentSlide: false,
      container: false,
      camera: false,
      width: window.innerWidth,
      height: window.innerHeight,
      className: ""
    }
  ) {
    super(params);

    this.allSlides = params.allSlides;
    this.currentSlide = params.currentSlide;

    this.allSlideObjects = [];
    this.currentSlideObject = false;

    this.posAndRots = [
      {
        pos: new THREE.Vector3(0, 0, 0),
        rot: new THREE.Euler(0, 0, 0)
      },
      {
        pos: new THREE.Vector3(0, 0, 0),
        rot: new THREE.Euler(0, 0, 0)
      },
      {
        pos: new THREE.Vector3(0, 0, 0),
        rot: new THREE.Euler(0, 0, 0)
      },
      {
        pos: new THREE.Vector3(0, 0, 0),
        rot: new THREE.Euler(0, 0, 0)
      },
      {
        pos: new THREE.Vector3(0, 0, 0),
        rot: new THREE.Euler(0, 0, 0)
      }
    ];

    this.animator = new Animator({
      animLength: 800,
      delay: 300,
      easeFunc: TWEEN.Easing.Quartic.Out
    });
  }
}
