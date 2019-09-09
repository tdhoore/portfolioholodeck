import * as THREE from "three";
import Animator from "./Animator.js";
import TvAnimator from "./TvAnimator.js";

class CamAnimator extends Animator {
  constructor() {
    super();
    this.cam = false;

    this.positions = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)];

    this.rotations = [];
  }

  setCam(index) {
    //set the cam
    this.moveObject(this.cam, index);
  }

  animateCam(index) {
    //set the cam
    const camTween = this.animateObject(this.cam, index);

    return camTween;
  }
}

export default CamAnimator;
