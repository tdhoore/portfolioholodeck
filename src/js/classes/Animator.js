import * as THREE from "three";

class Animator {
  constructor(
    params = {
      animLength: 800,
      delay: 300,
      easeFunc: TWEEN.Easing.Quartic.Out
    }
  ) {
    this.tween = false;

    this.currentPos = false;
    this.currentRot = false;

    this.animLength = params.animLength;
    this.delay = params.delay;
    this.easeFunc = params.easeFunc;

    this.isAnimating = false;
  }

  setObject(object) {
    //check if object is set
    if (!object) {
      console.log("no object");
      return;
    }

    //set camera position and rotation
    object.position.copy(this.currentPos);
    object.quaternion.set(
      this.currentRot.x,
      this.currentRot.y,
      this.currentRot.z,
      this.currentRot.w
    );
  }

  animateObject(object, newIndex) {
    //get start and end pos for cam
    const startPos = this.vectorToObj(this.currentPos);
    const endPos = this.vectorToObj(this.positions[newIndex]);

    //is animating
    this.isAnimating = true;

    //tween pos
    this.tween = new TWEEN.Tween(startPos)
      .to(endPos, this.animLength)
      .delay(this.delay)
      .easing(this.easeFunc)
      .onUpdate(() => {
        //update current location and rotation for CAM
        this.currentPos = this.objToVector(startPos);

        //set the location and rotation
        this.setObject(object);
      })
      .start()
      .onComplete(() => {
        //is NOT animating
        this.isAnimating = false;
      });

    //get Quaternions
    const startRot = this.currentRot;
    const endRot = new THREE.Quaternion().setFromEuler(
      this.degToRad(this.rotations[newIndex])
    );
    const qm = new THREE.Quaternion();

    const rotTween = { t: 0 };

    //tween rot
    this.tween = new TWEEN.Tween(rotTween)
      .to({ t: 1 }, this.animLength)
      .delay(this.delay)
      .easing(this.easeFunc)
      .onUpdate(() => {
        //set new currentrot
        this.currentRot = THREE.Quaternion.slerp(
          startRot,
          endRot,
          qm,
          rotTween.t
        );

        //set the location and rotation
        this.setObject(object);
      })
      .start();

    return this.tween;
  }

  moveObject(object, newIndex) {
    //calc pos and rot for the cam
    this.currentPos = this.positions[newIndex];
    this.currentRot = new THREE.Quaternion().setFromEuler(
      this.degToRad(this.rotations[newIndex])
    );

    //setting
    this.setObject(object);
  }

  updateTween() {
    //check if tween is set
    if (!this.tween) {
      return;
    }

    //update if yes
    this.tween.update();
  }

  degToRad(angleVector) {
    const result = new THREE.Euler(0, 0, 0);

    //convert values
    result.x = THREE.Math.degToRad(angleVector.x);
    result.y = THREE.Math.degToRad(angleVector.y);
    result.z = THREE.Math.degToRad(angleVector.z);

    return result;
  }

  vectorToObj(vector) {
    return {
      x: vector.x,
      y: vector.y,
      z: vector.z
    };
  }

  objToVector(obj) {
    return new THREE.Vector3(obj.x, obj.y, obj.z);
  }

  objToEuler(obj) {
    return new THREE.Euler(obj.x, obj.y, obj.z);
  }
}

export default Animator;
